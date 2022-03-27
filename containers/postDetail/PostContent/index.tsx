import { MarkDownComponent, Post } from 'interfaces';
import Image from 'next/image';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import PostHeader from '../PostHeader';
import classes from './PostContent.module.css';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

interface PostContentProps {
    post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    const { image, slug, title, content } = post;

    const customComponent = useMemo(() => {
        return {
            p({ node, children }) {
                if ((node.children[0] as any).tagName === 'img') {
                    const image = node.children[0] as any;

                    return (
                        <div className={classes.image}>
                            <Image
                                src={`/images/posts/${slug}/${image.properties.src}`}
                                alt={image.alt}
                                width={600}
                                height={300}
                            />
                        </div>
                    );
                }

                return <p>{children}</p>;
            },

            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');

                return !inline && match ? (
                    <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        {...props}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                );
            },
        } as MarkDownComponent;
    }, []);

    return (
        <article className={classes.content}>
            <PostHeader
                title={title}
                image={`/images/posts/${slug}/${image}`}
            />
            <ReactMarkdown components={customComponent}>
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;

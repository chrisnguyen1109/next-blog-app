import PostContent from 'containers/postDetail/PostContent';
import { NextPageWithLayout, Post } from 'interfaces';
import { getPost, getPostFiles } from 'lib';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface PostDetailPageProps {
    post: Post;
}

const PostDetailPage: NextPageWithLayout<PostDetailPageProps> = ({ post }) => {
    const { title, excerpt } = post;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={excerpt} />
            </Head>
            <PostContent post={post} />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getPostFiles();

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    PostDetailPageProps
> = async ctx => {
    const { slug } = ctx.params!;

    const post = await getPost(slug as string);

    return {
        props: {
            post,
        },
        revalidate: 60 * 60 * 24, // 1 day
    };
};

export default PostDetailPage;

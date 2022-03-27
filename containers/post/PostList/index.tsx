import { Post } from 'interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from 'utils';

import classes from './PostList.module.css';

interface PostListProps {
    posts: Post[];
    priority?: boolean;
}

const PostList: React.FC<PostListProps> = ({ posts, priority }) => {
    return (
        <ul className={classes.grid}>
            {posts.map(({ title, date, image, excerpt, slug }, index) => {
                const imagePath = `/images/posts/${slug}/${image}`;
                const linkPath = `/post/${slug}`;
                const isPriority = priority && index <= 1;

                return (
                    <li key={slug} className={classes.post}>
                        <Link href={linkPath}>
                            <a>
                                <div className={classes.image}>
                                    <Image
                                        src={imagePath}
                                        alt={title}
                                        width={300}
                                        height={200}
                                        layout="responsive"
                                        priority={isPriority}
                                    />
                                </div>
                                <div className={classes.content}>
                                    <h3>{title}</h3>
                                    <time>{formatDate(date)}</time>
                                    <p>{excerpt}</p>
                                </div>
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default PostList;

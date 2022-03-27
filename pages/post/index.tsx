import AllPosts from 'containers/post/AllPosts';
import { NextPageWithLayout, Post } from 'interfaces';
import { getAllPosts } from 'lib';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface PostListPageProps {
    posts: Post[];
}

const PostListPage: NextPageWithLayout<PostListPageProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name="description"
                    content="A list of all programming-related tutorials and posts!"
                />
            </Head>
            <AllPosts posts={posts} />
        </>
    );
};

export const getStaticProps: GetStaticProps<PostListPageProps> = async () => {
    const posts = await getAllPosts();

    return {
        props: {
            posts,
        },
        revalidate: 60 * 60 * 24, // 1 day
    };
};

export default PostListPage;

import FeaturePosts from 'containers/hompage/FeaturePosts';
import Hero from 'containers/hompage/Hero';
import { NextPageWithLayout, Post } from 'interfaces';
import { getFeaturedPosts } from 'lib';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface HomePageProps {
    posts: Post[];
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Chris&apos;s Blog</title>
                <meta
                    name="description"
                    content="I post about programming and web development."
                />
            </Head>
            <Hero />
            <FeaturePosts posts={posts} />
        </>
    );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const posts = await getFeaturedPosts();

    return {
        props: {
            posts,
        },
        revalidate: 60 * 60 * 24, // 1 day
    };
};

export default HomePage;

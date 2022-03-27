import PostList from 'containers/post/PostList';
import { Post } from 'interfaces';
import classes from './FeaturePosts.module.css';

interface FeaturePostsProps {
    posts: Post[];
}

const FeaturePosts: React.FC<FeaturePostsProps> = ({ posts }) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostList posts={posts} />
        </section>
    );
};

export default FeaturePosts;

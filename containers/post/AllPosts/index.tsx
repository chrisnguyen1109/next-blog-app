import { Post } from 'interfaces';
import PostList from '../PostList';
import classes from './AllPosts.module.css';

interface AllPostsProps {
    posts: Post[];
}

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostList posts={posts} priority />
        </section>
    );
};

export default AllPosts;

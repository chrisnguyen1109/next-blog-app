import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import matter from 'gray-matter';
import { Post } from 'interfaces';

const postDir = path.join(process.cwd(), 'contents/posts');

export const getPostFiles = async () => {
    const readDir = promisify(fs.readdir);
    const files = await readDir(postDir);

    return files.map(file => file.replace(/\.md$/, ''));
};

export const getPost = async (filename: string) => {
    const filePath = path.join(postDir, `${filename}.md`);
    const readFile = promisify(fs.readFile);
    const fileContent = await readFile(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    return {
        slug: filename,
        content,
        ...(data as Omit<Post, 'slug' | 'content'>),
    };
};

export const getAllPosts = async () => {
    const postFiles = await getPostFiles();

    return Promise.all(postFiles.map(async file => await getPost(file)));
};

export const getFeaturedPosts = async () => {
    const allPosts = await getAllPosts();

    return allPosts.filter(post => post.isFeatured);
};

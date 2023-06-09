import path from "path";
import * as fs from "fs";
import matter from "gray-matter";
import {IBlogPost, IBlogPostHtml} from "@/types";
import {remark} from "remark";
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(file => {
    const id = file.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);

    const blogPost: IBlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }

    return blogPost;
  });

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const blogPostWithHTML: IBlogPostHtml = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  }

  return blogPostWithHTML;
}
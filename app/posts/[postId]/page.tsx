import React from 'react';
import {getPostData, getSortedPostsData} from "@/lib/posts";
import {notFound} from "next/navigation";
import {getFormattedDate} from "@/lib/getFormattedDate";
import Link from "next/link";

type PostProps = {
  params: {
    postId: string,
  }
}

export const generateMetadata = ({params}: PostProps) => {
  const posts = getSortedPostsData();
  const {postId} = params;
  const post = posts.find(post => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
  }
};

export const generateStaticParas = () => {
  const posts = getSortedPostsData();

  return posts.map(post => ({
    postId: post.id,
  }));
};

const Post = async ({params}: PostProps) => {
  const posts = getSortedPostsData();
  const {postId} = params;

  if (!posts.find(post => post.id === postId)) {
    return notFound();
  }

  const {title, contentHtml, date} = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 mx-auto prose prose-xl prose-slate dark:prose-invert">
      <h1 className="mt-4 mb-0 text-3xl">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article dangerouslySetInnerHTML={{__html: contentHtml}}/>
      <Link
        href="/"
        className="text-white/90 no-underline hover:text-white"
      >
        🔙 Back to Home
      </Link>
    </main>
  );
};

export default Post;
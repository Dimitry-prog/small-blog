import React from 'react';
import {getSortedPostsData} from "@/lib/posts";
import Posts from "@/app/components/Posts";

const PostsList = () => {
  const posts = getSortedPostsData();

  return (
    <section className="max-w-2xl mt-6 mx-auto">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map(post => (
          <Posts key={post.id} post={post}/>
        ))}
      </ul>
    </section>
  );
};

export default PostsList;
import React, { FC } from 'react';
import {IBlogPost} from "@/types";
import {getFormattedDate} from "@/lib/getFormattedDate";
import Link from "next/link";

type PostsProps = {
 post: IBlogPost;
};

const Posts: FC<PostsProps> = ({post}) => {
 const { id, title, date } = post;
 const formattedDate = getFormattedDate(date);

 return (
  <li className="mt-4 flex flex-col gap-4 text-2xl dark:text-white/90">
   <Link
     href={`/posts/${id}`}
     className="hover:text-white/70 dark:hover:text-white"
   >
    {title}
   </Link>
   <p className="mt-1 text-sm">{formattedDate}</p>
  </li>
 );
};

export default Posts;
import { Htag } from "@/components/index";
import { IPost } from "@/interfaces/index";
import Link from "next/link";
import React from "react";

interface IPostsList {
  posts: IPost[];
}

const PostsList = ({ posts }: IPostsList) => {
  console.log("posts", posts);

  return (
    <>
      <Htag tag="h1">Travel Blog - Posts List)</Htag>
      <div className="posts-container">
        {posts?.map((post) => (
          <Link key={post._id} href="/posts/[slug]" as={`/posts/${post.slug.current}`} passHref>
            <p>{post.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostsList;

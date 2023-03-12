import React from "react";
import { getClient } from "../config/sanity-server";
import groq from "groq";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import { PostsList } from "@/pages/index";
import { IPost } from "@/interfaces/index";

interface HomeProps extends Record<string, unknown> {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
     _id,
     title,
     "username": author->username,
     "categories": categories[]->{id, title},
     "authorImage": author->avatar,
     body,
     mainImage,
     slug,
     publishedAt,
     visited,
     }`);

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: HomeProps): JSX.Element => <PostsList posts={posts} />;

export default withLayout(Home);

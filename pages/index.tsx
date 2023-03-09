import React from "react";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
// import Head from "next/head";
// import Link from "next/link";
// import Card from "../components/Card";
import { Htag } from "@/components/index";
import { withLayout } from "@/layout/Layout";

interface IHome {
  posts: any;
}

const Home = ({ posts }: IHome): JSX.Element => {
  console.log("posts", posts);

  return (
    <>
      <Htag tag="h1">Travel Blog Home Page)</Htag>
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  console.log(getClient);

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
     publishedAt
     }`);
  return {
    props: {
      posts,
    },
  };
};

export default withLayout(Home);

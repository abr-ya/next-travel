import React from "react";
import { Htag } from "@/components/index";
import { withLayout } from "@/layout/Layout";

const Home = (): JSX.Element => {
  console.log("first");

  return (
    <>
      <Htag tag="h1">Travel Blog Home Page)</Htag>
    </>
  );
};

export default withLayout(Home);

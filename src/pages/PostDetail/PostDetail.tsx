import React from "react";
import { Tag } from "@/components/index";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../config/sanity";
import { ICategory, IPostDetail } from "@/interfaces/index";

interface IPostDetailPage {
  post: IPostDetail;
}

// todo рефакторинг?
const PostComponents = {
  types: {
    image: ({ value }: any) => {
      return <img className="post-image" alt={value.alt || " "} src={urlFor(value).url()} />;
    },
  },
};

const PostDetailPage = ({ post: { title, categories, body, authorImage, username, about } }: IPostDetailPage) => {
  console.log(title, username);

  if (!title) return null;

  return (
    <article className="post-container">
      <h1>{title}</h1>
      <hr />
      {/* todo общий компонент тегов со стилями! */}
      {categories.map((category: ICategory) => (
        <Tag>{category.title}</Tag>
      ))}

      <PortableText value={body} components={PostComponents} />

      <hr />

      <div className="info-container">
        <div className="author-container">
          <img className="avatar" src={urlFor(authorImage).url()} alt={username + " avatar"} />
          <h3>
            Author: <strong>{username}</strong>
          </h3>
          <p>About Author</p>
          <p>{about}</p>
        </div>

        <div className="map-container">todo: map</div>
      </div>
    </article>
  );
};

export default PostDetailPage;

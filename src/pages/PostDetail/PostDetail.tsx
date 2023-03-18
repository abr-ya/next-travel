import React from "react";
import { Htag, MapBox, TagsBlock } from "@/components/index";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../config/sanity";
import { IPostDetail } from "@/interfaces/index";

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

const PostDetailPage = ({ post }: IPostDetailPage) => {
  if (!post?.title) return null;

  const { title, categories, body, authorImage, username, about, location } = post;

  const token = process.env.NEXT_PUBLIC_MAP_API;

  return (
    <article className="post-container">
      <Htag tag="h1">{title}</Htag>
      <hr />

      <TagsBlock tags={categories} />
      <PortableText value={body} components={PostComponents} />
      <hr />

      <div className="info-container">
        <div className="author-container">
          <div>
            <img className="avatar" src={urlFor(authorImage).url()} alt={username + " avatar"} />
          </div>
          <div>
            <Htag tag="h3">
              Author: <strong>{username}</strong>
            </Htag>
            <p>About Author</p>
            <p>{about}</p>
          </div>
        </div>

        <div className="map-container">
          {token ? <MapBox coord={location} token={token} /> : <span>ошибка! не получили MapBox-токен!</span>}
        </div>
      </div>
    </article>
  );
};

export default PostDetailPage;

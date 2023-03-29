import { urlFor } from "../../../config/sanity";
import { ForwardedRef, forwardRef } from "react";
import { Htag, P, TagsBlock } from "@/components/index";
import { CardProps } from "./Card.props";
import styles from "./Card.module.css";

export const Card = forwardRef(({ post, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { title, publishedAt, mainImage, username, authorImage, categories, visited } = post;

  const mainPicUrl = urlFor(mainImage).url();
  const avaUrl = urlFor(authorImage).url();

  return (
    <div className={styles.card} {...props} ref={ref}>
      <Htag tag={"h2"}>{title}</Htag>
      <P size="s">visited: {new Date(visited).toDateString()}</P>
      <P size="s">published: {new Date(publishedAt).toDateString()}</P>

      <img className="main-image" alt={title + " image"} src={mainPicUrl} />

      <hr />

      <div className={styles.info}>
        <P size="s">Posted by: {username}</P>
        <img className="avatar" alt={username + " avatar"} src={avaUrl} />
      </div>

      <TagsBlock tags={categories} />
    </div>
  );
});

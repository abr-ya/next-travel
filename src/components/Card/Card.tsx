import { urlFor } from "../../../config/sanity";
import { ForwardedRef, forwardRef } from "react";
import { Tag } from "..";
import { ICategory } from "@/interfaces/index";
import { CardProps } from "./Card.props";
import styles from "./Card.module.css";

export const Card = forwardRef(({ post, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { title, publishedAt, mainImage, username, authorImage, categories } = post;

  const mainPicUrl = urlFor(mainImage).url();
  const avaUrl = urlFor(authorImage).url();

  return (
    <div className={styles.card} {...props} ref={ref}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>

      <img className="main-image" alt={title + " image"} src={mainPicUrl} />

      <hr />

      <div className={styles.info}>
        <p>Posted by: {username}</p>
        <img className="avatar" alt={username + " avatar"} src={avaUrl} />
      </div>

      <div className={styles.tags}>
        {categories.map((category: ICategory) => (
          <Tag className={styles.tag}>{category.title}</Tag>
        ))}
      </div>
    </div>
  );
});

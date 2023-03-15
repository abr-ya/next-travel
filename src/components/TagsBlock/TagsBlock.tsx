import React from "react";
import { Tag } from "@/components/index";
import { ICategory } from "@/interfaces/index";
import styles from "./TagsBlock.module.css";

const TagsBlock = ({ tags }: { tags: ICategory[] | null }) => {
  if (!tags) return null;

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag className={styles.tag} key={tag.title}>
          {tag.title}
        </Tag>
      ))}
    </div>
  );
};

export default TagsBlock;

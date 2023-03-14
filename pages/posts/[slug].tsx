import groq from "groq";
import { getClient } from "../../config/sanity-server";
import { IPostDetail } from "@/interfaces/index";
import { PostDetail } from "@/pages/index";

const Post = ({ post }: { post: IPostDetail }) => <PostDetail post={post} />;

const query = groq`*[_type == "post" && slug.current == $slug][0]
{
  title,
  "username": author->username,
  "about": author->bio,
  "categories": categories[] -> { id, title },
  "authorImage": author->avatar,
  body,
  publishedAt,
  mainImage,
  postedAt
}`;

export const getStaticPaths = async () => {
  const paths = await getClient(false).fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params, preview = false }: any) => {
  const post = await getClient(preview).fetch(query, { slug: params.slug });

  return {
    props: {
      post,
    },
  };
};

export default Post;

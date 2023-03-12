export interface IPost {
  _id: string;
  authorImage: AuthorImage;
  body: Body[];
  categories: ICategory[];
  mainImage: MainImage;
  publishedAt: Date;
  slug: Slug;
  title: string;
  username: string;
  visited: string;
}

// add
interface Asset {
  _ref: string;
  _type: string;
}

interface AuthorImage {
  _type: string;
  asset: Asset;
}

interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

interface Body {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

export interface ICategory {
  id: string;
  title: string;
}

interface MainImage {
  _type: string;
  asset: Asset;
}

interface Slug {
  _type: string;
  current: string;
}
// add

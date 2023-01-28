export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Bio {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Image {
  _type: string;
  asset: Asset;
}

export interface AuthorSlug {
  _type: string;
  current: string;
}

export interface Author {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  bio: Bio[];
  image: Image;
  name: string;
  slug: AuthorSlug;
}

export interface Child2 {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Asset2 {
  _ref: string;
  _type: string;
}

export interface Body {
  _key: string;
  _type: string;
  children: Child2[];
  markDefs: any[];
  style: string;
  asset: Asset2;
}

export interface Asset3 {
  _ref: string;
  _type: string;
}

export interface Crop {
  _type: string;
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface Hotspot {
  _type: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface MainImage {
  _type: string;
  asset: Asset3;
  crop: Crop;
  hotspot: Hotspot;
}

export interface Slug {
  _type: string;
  current: string;
}
export interface Category {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  description: string;
  title: string;
}

export interface BlogPost {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  author: Author;
  body: Body[];
  categories?: Category[];
  mainImage: MainImage;
  slug: Slug;
  title: string;
}

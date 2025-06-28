export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    }
  },
  author->{
    name
  },
  categories[]->{
    title
  },
  body,
  excerpt
}`;

export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  "authorName": author->name,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  },
  body
}`;
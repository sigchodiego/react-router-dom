import { useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

export const BlogPost = () => {
  const { slug } = useParams();
  const blogpost = blogdata.find((post) => post.slug == slug);
  return (
    <>
      <h2>Blog Post</h2>
      <hr />
      <h5>{blogpost.title}</h5>
      <p>{blogpost.content}</p>
    </>
  );
};

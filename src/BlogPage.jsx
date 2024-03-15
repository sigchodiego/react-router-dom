import { Link } from "react-router-dom";
import { blogdata } from "./blogdata.js";

export const BlogPage = () => {
  return (
    <>
      <p>Blog Page</p>
      <ul>
        {blogdata.map((post) => (
          <BlockLink key={post.text} post={post} />
        ))}
      </ul>
    </>
  );
};

const BlockLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};

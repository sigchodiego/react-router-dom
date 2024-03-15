import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find((post) => post.slug == slug);
  const regresarAPaginaAnterior = () => {
    navigate("/blog"); // Para siempre ser dirigidos a la página de blog
    // navigate(-1); // Para siempre ser dirigidos a la página de home
  };
  return (
    <>
      <h2>Blog Post</h2>
      <hr />
      <h5>{blogpost.title}</h5>
      <p>{blogpost.content}</p>
      <button onClick={() => regresarAPaginaAnterior()}>Volver atras</button>
    </>
  );
};

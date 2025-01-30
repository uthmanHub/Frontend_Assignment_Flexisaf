import React from "react";
import { useParams } from "react-router";

const BlogPage = () => {
  const { id } = useParams();
  
  return <div>hello {id}</div>;
};

export default BlogPage;

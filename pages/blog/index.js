import React from "react";
import { getBlogProps } from "../../lib/data";
export const getStaticProps = async () => {
  const blogs = await getBlogProps();

  return {
    props: blogs,
  };
};
const Blog = (blogs) => {
  console.log(blogs);
  return (
    <div className="md-mx-12 mb-auto p-6 mx-6 container text-6xl text-purple-800">
      Blog Page
    </div>
  );
};

export default Blog;

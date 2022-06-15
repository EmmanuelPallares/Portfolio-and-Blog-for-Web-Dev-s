import { getEachSeoBlog, getSeosProps } from "../../lib/data";

export const getStaticPaths = async () => {
  const seoRes = await getSeosProps();
  const seos = seoRes.blogPosts;

  return {
    paths: seos.map((seo) => ({ params: { seo: seo.seo } })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const seoItem = await getEachSeoBlog(params.seo);
  return {
    props: {
      seoItem: seoItem.blogPosts[0],
    },
  };
};

const Post = ({ seoItem }) => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-6xl text-gray-900 font-bold">{title}</h1>
        <h1 className="text-6xl text-gray-900 font-bold">{seoItem}</h1>
      </div>
    </div>
  );
};

export default Post;

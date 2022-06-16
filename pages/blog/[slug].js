import { getBlogItem, getBlogSlugs } from "../../lib/data";

export const getStaticPaths = async () => {
  const slugsRes = await getBlogSlugs();
  const slugs = slugsRes.blogPosts;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const blogItem = await getBlogItem(params.slug);
  return {
    props: {
      blogItem: blogItem.blogPosts[0],
    },
  };
};

const Home = ({ blogItem }) => {
  console.log(blogItem);
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-6xl text-gray-900 font-bold">{blogItem.title}</h1>
        <h1 className="text-6xl text-gray-900 font-bold"></h1>
      </div>
    </div>
  );
};

export default Home;

import { getLatestBlogProps } from "../lib/data";
import Hero from "../components/monst/Hero";
import LatestBlogs from "../components/monst/LatestBlog";
import BussinesSolution from "../components/monst/BussinesSolution";
import WhyUs from "../components/monst/WhyUs";

export const getStaticProps = async () => {
  const latestblogs = await getLatestBlogProps();
  return {
    props: latestblogs,
  };
};

export default function Index(latestblogs) {
  return (
    <>
      <Hero />
      <BussinesSolution />
      <WhyUs />
      <LatestBlogs props={latestblogs} />
    </>
  );
}

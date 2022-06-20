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
      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
      <Hero />
      <BussinesSolution />
      <WhyUs />
      <LatestBlogs props={latestblogs} />
      {/* <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
              <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                <h2
                  className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <span className="text-[#E93D44]">Recent</span> Works
                </h2>
                <p
                  className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn text-[#E93D44]"
                  data-wow-delay=".9s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
              </div>
            </div>
             <div className="sm:w-12 md:w-full lg:w-1/3 xl:w-1/4 flex flex-wrap">
              <div className="relative sm:w-12 md:w-full lg:w-1/3 xl:w-1/4">
                <div
                  className="carausel-2-columns slick-carausel"
                  id="carausel-2-columns-1"
                >
                  <Slider1 props={portfolioIndex} />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section> */}
    </>
  );
}

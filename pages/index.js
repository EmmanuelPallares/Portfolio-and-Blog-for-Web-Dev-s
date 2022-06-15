import Slider1 from "../components/slider/Slider1";
import { getIndexPortfolio } from "../lib/data";
import Hero from "../components/monst/Hero";
import BussinesSolution from "../components/monst/BussinesSolution";
import WhyUs from "../components/monst/WhyUs";
import PortfolioPreviewIndex from "../components/monst/PortfolioPreviewIndex";

export const getStaticProps = async () => {
  const portfolioIndex = await getIndexPortfolio();

  return {
    props: portfolioIndex,
  };
};

export default function Index(portfolioIndex) {


  return (
    <>
      <Hero />
      <BussinesSolution />
      <WhyUs />
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
              <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                <h2
                  className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <span className="text-blue-500">Recent</span> Works
                </h2>
                <p
                  className=" text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn text-blue-500"
                  data-wow-delay=".9s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap">
              <div className="relative w-full">
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
      </section>
    </>
  );
}

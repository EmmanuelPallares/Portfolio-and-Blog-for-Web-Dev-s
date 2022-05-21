import ProjectCard from "../components/ProjectCard";
import { getPortfolioProps } from "../../lib/data";
export const getStaticProps = async () => {
  const portfolios = await getPortfolioProps();

  return {
    props: portfolios,
  };
};

export default function Test(portfolios) {
  const ARRAYPORTFOLIO = portfolios.props.portfolios;
  console.log(ARRAYPORTFOLIO);
  return (
    <>
      <div></div>

      <>
        {ARRAYPORTFOLIO.map(({ title, description, slug, imagePortfolio }) => (
          <div>
            <div className="mt-6 mb-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              {/* <Image
src="https://i.imgur.com/b3uHPlM.pngaTxOe"
alt="from imgur library"
width={800}
height={500}
className="object-contain rounded-t-lg max-w-sm"
priority={true}
/> */}

              <div
                id="default-carousel"
                className="relative"
                data-carousel="static"
              >
                <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                  <div
                    className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                    data-carousel-item="1"
                  >
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                      First Slide
                    </span>
                    <img
                      src={imagePortfolio.url}
                      className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>

                  <div
                    className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                    data-carousel-item=""
                  >
                    <img
                      src="https://i.imgur.com/4FuYJ9c.jpg"
                      className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>

                  <div
                    className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                    data-carousel-item=""
                  >
                    <img
                      src="https://i.imgur.com/lKGLFtM.jpg"
                      className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                </div>

                <button
                  type="button"
                  className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                  data-carousel-prev=""
                >
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        cliprulestrokelinejoin="round"
                        strokewidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span className="hidden">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                  data-carousel-next=""
                >
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        cliprulestrokelinejoin="round"
                        strokewidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="hidden">Next</span>
                  </span>
                </button>
              </div>

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    </>
  );
}

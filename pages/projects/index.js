import { getPortfolioProps } from "../../lib/data";
import Link from "next/link";
export const getStaticProps = async () => {
  const portfolios = await getPortfolioProps();

  return {
    props: portfolios,
  };
};

export default function Index(portfolios) {
  const ARRAYPORTFOLIO = portfolios.props.portfolios;
  console.log(ARRAYPORTFOLIO);
  return (
    <>
      <section className="py-20">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            Projects and Recent Works
          </h1>
          <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Home
              </a>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Projects
              </a>
              {/* <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
            </li>
            {/* <li className="inline-flex items-center text-gray-400">
              <span>Web Development</span>
            </li> */}
          </ul>
          {ARRAYPORTFOLIO.map(
            ({ title, imagePortfolioOne, slug, description }) => (
              <>
                <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                  <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                    <Link href={`/blog/${slug}`}>
                      <a>
                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                          Development
                        </span>
                      </a>
                    </Link>
                    <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                      <Link href={`/blog/${slug}`}>
                        <a className="hover:text-blue-500">{title}</a>
                      </Link>
                    </h3>
                    <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                      {description}
                    </p>
                    <Link href={`/blog/${slug}`}>
                      <a className="text-xs font-semibold text-blue-600">
                        <span>Read More</span>
                        <svg
                          className="inline-block w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewbox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                    <Link href={`/blog/${slug}`}>
                      <a>
                        <img
                          className="h-80 w-full object-cover rounded"
                          src={imagePortfolioOne.url}
                          alt="Monst"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )
          )}
          <div className="text-center">
            <Link href="/blog">
              <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">
                Show all posts
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

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
  // console.log(ARRAYPORTFOLIO);
  return (
    <>
      <section className="py-20">
        <div className="container">
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            Projects and Recent Works
          </h1>
          <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-gray-500 text-gray-800">
                Home
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center">
              <Link
                href="/projects"
                className="hover:text-gray-500 text-gray-800"
              >
                Projects
              </Link>
            </li>
            {/* <li className="inline-flex items-center text-gray-400">
              <span>Web Development</span>
            </li> */}
          </ul>
          {ARRAYPORTFOLIO.map(({ title, imagePortfolioOne, slug, excerpt }) => (
            <>
              <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                  {/* <Link href={`/projects/${slug}`}>
                    <a>
                      <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                        Development
                      </span>
                    </a>
                  </Link> */}
                  <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                    <Link href={`/projects/${slug}`}>
                      <a className="hover:text-blue-500">{title}</a>
                    </Link>
                  </h3>
                  <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                    {excerpt}
                  </p>
                  <Link href={`/projects/${slug}`}>
                    <a className="text-xs font-semibold text-gray-900">
                      <span>Read More</span>
                      <svg
                        className="inline-block w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                  <Link href={`/projects/${slug}`}>
                    <a>
                      <img
                        className="h-80 w-full object-cover rounded"
                        src={imagePortfolioOne.url}
                        alt="image 1"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </>
          ))}
          <div className="text-center">
            <Link href="/">
              <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-[#111823] rounded">
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

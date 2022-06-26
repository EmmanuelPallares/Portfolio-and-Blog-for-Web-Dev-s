import { getBlogItem, getBlogSlugs, getVitozDevAuthor } from "../../lib/data";
import { RichText } from "@graphcms/rich-text-react-renderer";

import Link from "next/link";
import Head from "next/head";
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

  const AUTHOR = await getVitozDevAuthor();
  const VITOZAUTHOR = AUTHOR.props.author;

  return {
    props: {
      blogItem: blogItem.blogPosts[0],
      VITOZAUTHOR,
    },
  };
};

const Home = ({ blogItem, VITOZAUTHOR }) => {
  return (
    <div>
      <Head>
        <title>{blogItem.seo.title}</title>
        <meta name="description" content={blogItem.seo.description} />
        <meta property="og:title" content={blogItem.seo.title} />
        <meta property="og:description" content={blogItem.seo.description} />
        <meta property="og:url" content={blogItem.seo.url} />
        <meta property="og:type" content="website" />
      </Head>
      <section className="pb-20">
        <div className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-base md:text-lg">
                  {/* <Link href="/blog-2">
                    <a className="text-blueGray-200 hover:underline">
                      <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-green-600 rounded-xl mr-3">
                        Bussiness
                      </span>
                    </a>
                  </Link> */}
                  <span className="text-blueGray-500 text-sm">
                    {blogItem.published}
                  </span>
                </span>
                <h2 className="text-4xl md:text-5xl mt-4 font-bold font-heading">
                  {blogItem.title}
                </h2>
              </div>
              <div className="flex justify-center mb-8">
                <img
                  src={VITOZAUTHOR.userImage.url}
                  alt="Monst"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div className="pl-4">
                  <p className="text-blueGray-500 mb-1">{VITOZAUTHOR.name}</p>
                  <p className="text-xs text-blueGray-500 font-semibold">
                    {VITOZAUTHOR.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <p
              className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <RichText content={blogItem.richText.raw.children} />
            </p>
          </div>

          <div
            className="pt-40 pb-40 mb-12 bg-cover bg-no-repeat bg-center rounded-xl"
            style={{
              backgroundImage: "url(`${blogItem.coverImage.url}`)",
            }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6"></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap mt-12 mb-12">
              <div className="w-full">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={VITOZAUTHOR.userImage.url}
                      alt="Monst"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-1 text-md">
                        {VITOZAUTHOR.name}
                      </strong>
                      <p className="text-xs mt-3"> {VITOZAUTHOR.company}</p>
                    </div>
                  </div>
                  <p className="leading-loose mb-5 text-sm">
                    {VITOZAUTHOR.description}
                  </p>
                  <a
                    href="https://twitter.com/EPallaresDev"
                    target="_blank"
                    className="inline-flex items-center text-gray-600 dark:text-gray-200 hover:underline mt-8"
                  >
                    <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                      <title>Logo Twitter</title>
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                    </svg>
                    <span className="mx-2">twitter</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center mt-12">
              <Link href="/blog">
                <a className="px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform border border-gray-100 rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                  Back to Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

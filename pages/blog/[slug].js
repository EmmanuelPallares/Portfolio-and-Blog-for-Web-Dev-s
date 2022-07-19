import { getBlogItem, getBlogSlugs, getVitozDevAuthor } from "../../lib/data";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Children, useEffect } from "react";
import Prism from "prismjs";
import Image from "next/image";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";

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
  console.log(blogItem.seo);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Head>
        <title>{blogItem.seo.title}</title>
        <meta property="fb:app_id" content="107357685387350" />
        <meta property="og:title" content={blogItem.seo.title} />
        <meta property="og:description" content={blogItem.seo.description} />
        <meta property="og:url" content={blogItem.seo.url} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/4qFQw9uROW0xJ3eCS7GQ"
        />
        <meta property="og:image:alt" content={blogItem.seo.image.alt} />
        <meta
          property="og:image:secure_url"
          content="https://media.graphassets.com/4qFQw9uROW0xJ3eCS7GQ"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
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
            </div>
          </div>
        </div>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <p
              className="mb-6 leading-loose text-blueGray-800 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <RichText
                content={blogItem.richText.raw.children}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="my-12 text-blueGray-800 text-3xl text-center wow">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h1 className="animate-bounce my-12 font-bold text-blueGray-800 text-3xl text-center wow">
                      {children}
                    </h1>
                  ),
                  bold: ({ children }) => (
                    <strong className="text-blueGray-900">{children}</strong>
                  ),
                  img: ({ src, altText, height, width }) => (
                    <div className="bg-gradient-to-r mt-6 mb-6 p-3">
                      <Image
                        src={src}
                        alt={altText}
                        height={height}
                        width={width}
                      />
                    </div>
                  ),
                  code_block: ({ children }) => (
                    <code className="line-numbers language-jsx">
                      {children}
                    </code>
                  ),
                  a: ({ children, href, rel }) => (
                    <div>
                      <a
                        className="hover:animate-bounce flex bg-[#203449] hover:bg-[#203449] text-white text-justify font-2xl mx-auto rounded p-6 m-3"
                        href={href}
                        rel={rel || "noopener noreferrer"}
                      >
                        {children}
                      </a>
                      <div className="flex space-x-4">
                        <div className="rounded-full bg-red-200 h-1 w-1"></div>
                        {/* <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-200 rounded"></div>
                            <div class="space-y-3">
                              <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                              </div>
                              <div class="h-2 bg-slate-200 rounded"></div>
                            </div>
                          </div> */}
                      </div>
                    </div>
                  ),
                }}
              />
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap mt-12 mb-12">
              <div className="w-full">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    {/* <Image
                      src={VITOZAUTHOR.userImage.url}
                      width={VITOZAUTHOR.userImage.width}
                      height={VITOZAUTHOR.userImage.height}
                      layout="fill"
                    /> */}
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
                    className="inline-flex items-center text-gray-600 dark:text-gray-200 hover:underline mt-8"
                  >
                    <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                      <title>Logo Twitter</title>
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                    </svg>
                    <span className="mx-2">Follow me</span>
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

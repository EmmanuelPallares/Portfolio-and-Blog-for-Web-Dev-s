import React from "react";
import Link from "next/link";
import { getBlogProps } from "../../lib/data";
export const getStaticProps = async () => {
  const blogs = await getBlogProps();

  return {
    props: blogs,
  };
};
export default function Index(blogs) {
  const ARRAYBLOGS = blogs.props.blogPosts;

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
          Blogs and News
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
            <Link href="/blog" className="hover:text-gray-500 text-gray-800">
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex flex-wrap -mx-3">
          {ARRAYBLOGS.map(
            ({
              title,
              coverImage,
              slug,

              excerpt,
              published,
            }) => (
              <div
                className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
                data-wow-delay=".1s"
                key={title}
              >
                <Link href={`/blog/${slug}`}>
                  <a>
                    <img
                      className="h-80 w-full object-cover rounded"
                      src={coverImage.url}
                    />
                  </a>
                </Link>
                <p className="mt-6 text-sm ">
                  {/* <Link href={`/blog/${slug}`}>
                    <a>
                      <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                        {slug}
                      </span>
                    </a>
                  </Link> */}
                  <span className="text-blueGray-400 text-xs">{published}</span>
                </p>
                <h3 className="my-2 text-2xl font-bold font-heading">
                  <Link href={`/blog/${slug}`}>
                    <a className="hover:text-gray-500">{title}</a>
                  </Link>
                </h3>
                <p className="text-blueGray-400 leading-loose">{excerpt}</p>
              </div>
            )
          )}
        </div>
        <div className="text-center">
          <Link href="/">
            <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-[#111823] rounded">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

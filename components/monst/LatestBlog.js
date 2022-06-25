import Link from "next/link";

const LatestBlog = (latestblogs) => {
  const LATESTBLOGSPROPS = latestblogs.props.props.blogPosts;
  console.log(LATESTBLOGSPROPS);
  return (
    <div className="py-20 container">
      <div className="flex mb-12">
        <h2
          className="p-3 text-3xl lg:text-4xl font-bold font-heading  wow animate__animated animate__fadeIn grow h-14 text-center "
          data-wow-delay=".1s"
        >
          Latest <span className="text-[#E93D44]">BlogPosts</span>
        </h2>
      </div>
      <div className="w-full lg:w-1/2 px-8"></div>
      {LATESTBLOGSPROPS.map(({ title, coverImage, slug, excerpt }) => (
        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
          <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
            {/* <Link href="/blog">
              <a>
                <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                  tag of props
                </span>
              </a>
            </Link> */}
            <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
              <Link href={`/blogs/${slug}`}>
                <a className="hover:text-[#222529]">{title}</a>
              </Link>
            </h3>
            <p className="mb-4 text-sm md:text-base leading-loose ">
              {excerpt}
            </p>
            <Link href={`/blogs/${slug}`}>
              <a className="text-xs font-semibold text-[#222529]">
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
            <Link href={`/blogs/${slug}`}>
              <a>
                <img
                  className="h-80 w-full object-cover rounded"
                  src={coverImage.url}
                  alt="monst"
                />
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestBlog;

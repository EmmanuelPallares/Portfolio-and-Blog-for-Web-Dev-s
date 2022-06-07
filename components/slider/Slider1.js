import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { getBlogProps } from "../../lib/data";
export const getStaticProps = async () => {
  const blogsIndex = await getBlogProps();

  return {
    props: blogsIndex,
  };
};

SwiperCore.use([Navigation]);

export default function Slider1(blogsIndex) {
  console.log(blogsIndex);
  return (
    <>
      {/* {blogs.map(({ blog, title, excerpt, coverImage }) => (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".custom_prev",
            nextEl: ".custom_next",
          }}
          className="custom-class"
        >
          <SwiperSlide>
            <div className="px-3 pb-5">
              <div className="card-slider group">
                <Image
                  className="rounded-xl"
                  src={coverImage.url}
                  alt="Monst"
                />
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                      <Link href="/services">
                        <a>{title}</a>
                      </Link>
                    </h1>
                    <p className="mt-2 text-xs text-gray-500">{excerpt}</p>
                  </div>
                  <div>
                    <Link href="/services">
                      <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ))} */}

      <div id="carausel-2-columns-1-arrows" className="flex">
        <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </span>
        <span className="text-blue-500 flex slick-arrow custom_next">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
}

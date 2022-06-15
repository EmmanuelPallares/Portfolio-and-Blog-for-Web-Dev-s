import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Slider1 = (props) => {
  return (
    <>
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
        {props.props.portfolios.map(
          ({ id, title, imagePortfolioOne, slug }) => (
            <SwiperSlide key={id}>
              <div className="px-3 pb-5">
                <div className="card-slider group">
                  <img
                    className="rounded-xl"
                    src={imagePortfolioOne.url}
                    alt="Monst"
                  />
                  <div className="flex justify-between items-end">
                    <div>
                      <h1 className="mt-5 text-xl font-semibold group-hover:text-[#111823]">
                        <Link href={`/projects/${slug}`}>
                          <a>{title}</a>
                        </Link>
                      </h1>
                    </div>
                    <div>
                      <Link href={`/projects/${slug}`}>
                        <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-[#111823]  rounded wow animate__animated animate__fadeIn ">
                          Read more
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div id="carausel-2-columns-1-arrows" className="flex">
        <span className="mr-4 text-[#222529] flex slick-arrow custom_prev">
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
        <span className="text-[#222529] flex slick-arrow custom_next">
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
};

export default Slider1;

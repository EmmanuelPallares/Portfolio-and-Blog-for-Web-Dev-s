import Image from "next/image";
import Link from "next/link";
import { getNavigationProps } from "../lib/data";

export const getNavigationProps = async () => {
  const DATA = await getPortfolioProps(NAVIGATION);

  return {
    props: {
      DATA,
    },
  };
};

export default function MainProjects(DATA) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
      {navitems?.map((navitem) => (
        <div key={navitem.slug}>
          <Link href={`/portfolio/${navitem.slug}`}>
            <a>
              <div className="relative mb-10 overflow-hidden">
                <div className="absolute w-full h-full z-10 opacity-80 bg-green-900"></div>
                <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-white font-semibold text-2xl">
                    {navitem.navitem}
                  </h3>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
s;

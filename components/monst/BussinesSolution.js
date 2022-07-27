import Image from "next/image";
import WebDevelopment from "../../public/assets/WebDevelopment.svg";
import WebDesign from "../../public/assets/WebDesign.svg";
import CloudSolutions from "../../public/assets/CloudSolutions.svg";
import CustomServices from "../../public/assets/CustomServices.svg";

const BussinesSolution = () => {
  return (
    <section className="pt-16 pb-20 " id="key-features">
      <div className="container">
        <div className="flex flex-wrap items-center mb-12">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2
              className="text-4xl font-bold font-heading wow  animate__animated animate__flipInY"
              data-wow-delay="0"
              data-wow-duration="2s"
            >
              <span>Solutions for </span>
              <br />
              <span className="text-[#E93D44]">your Business </span>
              <span>
                Grow <br />
                on time
              </span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p
              className="lg:pl-16 text-blueGray-400 leading-loose wow bounceInUp animate__animated animate__flipInY"
              data-wow-delay="0"
              data-wow-duration="2s"
            >
              {`For example if you want to increase the productivity, help with the interaction with their clients, grow your brand, ERP solutions, analitical tools, manage inventary,
              and many more, we can help you. I believe in a custom code can empower with cloud services is the denitive way and company process in the future.`}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6">
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <div
              className="border border-gray-100 pt-8 px-6 pb-6 text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__shakeY"
              data-wow-delay=".8s"
            >
              <div className="mx-auto mb-4 text-[#ffe134]">
                <Image
                  className="w-8 h-8 mx-auto"
                  stroke="currentColor"
                  src={WebDevelopment}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-2 font-bold font-heading">{`Web Development`}</h3>
              <p className="text-sm text-blueGray-400">
                {`Web development are one of the most popular business solutions, 
               which combines high advantages with ease mantenance.`}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <div
              className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__shakeY"
              data-wow-delay=".5s"
            >
              <div className="mx-auto mb-4 text-[#111823]">
                <Image
                  className="w-8 h-8 mx-auto"
                  stroke="currentColor"
                  src={WebDesign}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-2 font-bold font-heading">{`Web Design`}</h3>

              <p className="text-sm text-blueGray-400">
                {`Digital design has become an increasingly
                important area for a business. With the right
                 design stand out from your competition. `}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <div
              className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__shakeY"
              data-wow-delay=".7s"
            >
              <div className=" mx-auto mb-4 text-[#111823]">
                <Image
                  className="w-8 h-8 mx-auto"
                  stroke="currentColor"
                  src={CloudSolutions}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-2 font-bold font-heading">{`Cloud Solutions`}</h3>

              <p className="text-sm text-blueGray-400">
                {`Cloud solutions can help improve efficiency and agility,
               reduce cost, participate in new business models,
               and capture new market opportunities.`}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <div
              className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__shakeY"
              data-wow-delay=".9s"
            >
              <div className="mx-auto mb-4 text-[#111823]">
                <Image
                  className="w-8 h-8 mx-auto"
                  stroke="currentColor"
                  src={CustomServices}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="mb-2 font-bold font-heading">
                {`Custom Services`}
              </h3>
              <p className="text-sm text-blueGray-400">
                {`Custom services is the way to explore, discover, test, and more. Gives
               space to creativity for any interested in build next revolution legacy.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinesSolution;
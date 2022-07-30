import TextEffect from "../../components/elements/TextEffect";
import Image from "next/image";
import htmlcssjs from "../../assets/htmlcssjs.svg";
import cluster from "../../assets/cluster.svg";
const Hero = () => {
  return (
    <section
      className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
      style={{
        backgroundImage:
          "url('https://media.graphassets.com/Ct2JijaNTc5NhVlfv35b')",
      }}
    >
      <div className="hidden md:block absolute top-0 left-0 mt-32">
      <Image
          className="h-64 lg:h-80 jump"
          src={htmlcssjs}
          alt="Monst"
          width={400}
          height={300}
        />
      </div>
      <div className="hidden md:block absolute top-0 right-0 mt-32">
        <Image
          className="h-64 lg:h-80 jump"
          src={cluster}
          alt="Monst"
          width={400}
          height={300}
        />
      </div>
      <div className="container">
        <div className="py-12 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
              {`Committed to People. `}
              <br />
              <span className="">{`Committed `}</span>
              <span className="text-[#E93D44]">{`to the Future.`}</span>
            </h2>
            <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
              {`I'm `}
              <strong className="text-[#E93D44]">{`developer `}</strong>
              <TextEffect
                speed={1000}
                text1={`, a freelancer with a passion for building web applications. `}
                className="text-[#4e5154]"
              />
              <br />
            </p>
          </div>
          <div>
            <a
              className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-[#111823]  rounded wow animate__animated animate__fadeIn"
              href="#key-features"
            >
              {`Exclusive Features`}
            </a>
            <a
              className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
              href="#how-we-work"
            >
              How We Work?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

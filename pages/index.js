import { getPortfolioProps } from "../lib/data";

export const getStaticProps = async () => {
  const portfolios = await getPortfolioProps();

  return {
    props: {
      portfolios,
    },
  };
};

export default function Index(portfolios) {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 mb-12 text-6xl text-red-500">
        Home
      </div>
    </>
  );
}

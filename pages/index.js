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
  console.log(portfolios);
  return (
    <>
      <div> Hello World! Home Page</div>
    </>
  );
}

import ProjectCard from "../components/ProjectCard";
import { getPortfolioProps } from "../../lib/data";
export const getStaticProps = async () => {
  const portfolios = await getPortfolioProps();

  return {
    props: portfolios,
  };
};

export default function MainProjects(portfolios) {
  const ARRAYPORTFOLIO = portfolios.props.portfolios;
  console.log(ARRAYPORTFOLIO);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* MAP OF ARRAYS  */}
      <div className="text-black text-bold mx-0 p-0 m-6">
        {ARRAYPORTFOLIO.map(({ title, description }) => (
          <>
            <div key={title}>{title} </div>
            <div className="text-red-600">{description}</div>
          </>
        ))}
      </div>
      <ProjectCard />
    </div>
  );
}

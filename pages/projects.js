import ProjectCard from "../pages/components/ProjectCard";
import { getPortfolioProps } from "../lib/data";

export const getStaticProps = async () => {
  const portfolios = await getPortfolioProps();

  return {
    props: {
      portfolios,
    },
  };
};
export const Projects = (portfolios) => {
  return (
    <>
      <ProjectCard />;
    </>
  );
};

export default ProjectCard;

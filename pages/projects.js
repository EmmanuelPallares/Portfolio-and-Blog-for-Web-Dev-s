import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../pages/components/ProjectCard";
export const Projects = ({ portfolios }) => {
  console.log(portfolios);
  return <ProjectCard />;
};

export default ProjectCard;

import { GraphQLClient, gql } from "graphql-request";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl339o8uy4aru01z84ry54y9n/master"
);
const PORTFOLIO = gql`
  query {
    portfolios {
      title
      slug
      id
      imagePortfolio {
        url
      }
      description
      createdAt
      stage
    }
  }
`;
export async function getStaticProps() {
  const portfolios = await graphcms.request(PORTFOLIO);

  return {
    props: {
      portfolios,
    },
  };
}

export default function Index({ portfolios }) {
  useEffect(() => {
    window.welcomeMessage = "Welcome to vitoz.dev!";
  }, []);
  console.log(portfolios);
  return (
    <>
      <ProjectCard />
    </>
  );
}

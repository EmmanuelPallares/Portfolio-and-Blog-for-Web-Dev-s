import { GraphQLClient, gql } from "graphql-request";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
import { Template } from "../components/Template";
import { LogoSVG, VitozSVG } from "../components/svg/index";

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
export async function getStaticProps(props) {
  const { portfolios } = await graphcms.request(PORTFOLIO);

  return {
    props: {
      portfolios,
    },
  };
}

export default function Index() {
  return (
    <div>
      <NavBar props={LogoSVG} />

      <Footer />
    </div>
  );
}

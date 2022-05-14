import { GraphQLClient, gql } from "graphql-request";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
// import { Footer } from "./pages/components/Footer";

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

export default function Index(portfolios) {
  console.log(portfolios);
  return (
    <div>
      <NavBar />

      <Footer />
    </div>
  );
}

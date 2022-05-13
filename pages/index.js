import { GraphQLClient, gql } from "graphql-request";
import Footer from "../components/Footer";
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
  let { portfolios } = await graphcms.request(PORTFOLIO);

  return {
    props: {
      portfolios,
    },
  };
}

export default function Index({ portfolios }) {
  console.log(portfolios)
  return (
    <div class="bg-indigo-700">
      <h1>Hola mundo</h1>
      <Footer />
    </div>
  );
}

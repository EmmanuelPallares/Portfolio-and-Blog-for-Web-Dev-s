import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import { GraphQLClient, gql } from "graphql-request";
import { getPageProps } from "../lib/data";

export default function Index() {
  return (
    <>
      <Hero />
      <HighLights />
    </>
  );
}
export async function get() {
  
  const client = GraphQLClient;

  const { page } = await client.request(getPageProps, {
    locale,
    slug: "home",
  });

  const parsedPageData = await parsePageData(page);

  return {
    props: {
      page: parsedPageData,
      preview,
    },
    revalidate: 60,
  };
}

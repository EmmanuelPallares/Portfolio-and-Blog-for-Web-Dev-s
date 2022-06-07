import { GraphQLClient, gql } from "graphql-request";
import { getPageProps } from "../lib/data";
import Image from "next/image";
import React from "react";
import newlogo from "../assets/newlogo.svg";
import TextEffect from "../components/elements/TextEffect";
import Slider1 from "../components/slider/Slider1";

export default function Index() {
  return <>hello worl</>;
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

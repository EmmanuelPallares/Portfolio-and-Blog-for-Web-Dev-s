import { GraphQLClient, gql } from "graphql-request";
const endpoint = process.env.ENDPOINT;
const graphcms = new GraphQLClient(endpoint);

export async function getPortfolioProps() {
  const PORTFOLIO = gql`
    query {
      portfolios {
        title
        slug
        id

        imagePortfolioOne {
          url
        }
        imagePortfolioTwo {
          url
        }
        imagePortfolioThree {
          url
        }
        description
        createdAt
        stage
      }
    }
  `;
  const portfolios = await graphcms.request(PORTFOLIO);

  return {
    props: portfolios,
  };
}

export async function getBlogProps() {
  const BLOGSPROPS = gql`
    query {
      blogPosts {
        title
        coverImage {
          url
        }
        id
        slug
        content
        published
      }
    }
  `;
  const blogs = await graphcms.request(BLOGSPROPS);

  return {
    props: blogs,
  };
}

export const getBlogSlugs = async () => {
  const query = gql`
    query {
      blogPosts {
        slug
      }
    }
  `;

  return await graphcms.request(query);
};
export const getIndexPortfolio = async () => {
  const PORTFOLIOINDEX = gql`
    {
      portfolios {
        title
        description
        slug
        imagePortfolioOne {
          url
        }
      }
    }
  `;

  return await graphcms.request(PORTFOLIOINDEX);
};

export const getPortfolioSlugs = async () => {
  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;

  return await graphcms.request(query);
};

export const getPortfolioItem = async (slug) => {
  const query = gql`
    query getPortfolio($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        slug
        description
        urlDemo

        imagePortfolioOne {
          url
        }
        imagePortfolioTwo {
          url
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphcms.request(query, variables);
};

export const getBlogItem = async (slug) => {
  const query = gql`
    query getBlog($slug: String!) {
      blogPosts(where: { slug: $slug }) {
        title
        slug
        id
        coverImage {
          url
          height
        }
        published
        excerpt
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphcms.request(query, variables);
};

export async function getLatestBlogProps() {
  const LATESTBLOGSPROPS = gql`
    query {
      blogPosts(first: 3, orderBy: publishedAt_DESC) {
        title
        coverImage {
          url
        }
        id
        slug
        content
      }
    }
  `;
  const blogs = await graphcms.request(LATESTBLOGSPROPS);

  return {
    props: blogs,
  };
}

export async function getVitozDevAuthor() {
  const vitozDEV = gql`
    query {
      author(where: { id: "cl4ln46vyrad90bltvulx1pgg" }) {
        name
        company
        description
        userImage {
          url
          width
          height
        }
      }
    }
  `;
  const authorvitoz = await graphcms.request(vitozDEV);

  return {
    props: authorvitoz,
  };
}

import { GraphQLClient, gql } from "graphql-request";
const endpoint = process.env.ENDPOINT;
const graphcms = new GraphQLClient(endpoint);

export async function getPageProps() {
  const { page } = await graphcms.request(gql`
    query {
      page(where: { slug: "home" }) {
        slug
        title

        seo {
          title
          description
          image {
            url
          }
        }
      }
    }
  `);
  return page;
}
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
export async function getNavigationProps() {
  const NAVIGATIONQUERY = gql`
    query {
      navigations {
        navitem
        slug
      }
    }
  `;
  const DATA = await graphcms.request(NAVIGATIONQUERY);

  return {
    props: {
      DATA,
    },
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
export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      blogPosts(where: { slug: $slug }) {
        title
        slug
        content
        coverImage {
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

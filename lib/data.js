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
        seo {
          stage
          title
          noIndex
          keyWords
          description
          image {
            url
            width
            height
          }
        }
        excerpt
        richText {
          raw
          text
          html
        }
        imagePortfolioOne {
          url
          width
          height
        }
        imagePortfolioTwo {
          url
          width
          height
        }
        imagePortfolioThree {
          url
          width
          height
        }

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
        seo {
          stage
          title
          noIndex
          keyWords
          description
          image {
            url
            width
            height
          }
        }
        coverImage {
          url
          width
          height
        }
        id
        slug
        excerpt
        richText {
          raw
          text
          html
        }
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
        seo {
          stage
          title
          noIndex
          keyWords
          description
          image {
            url
            width
            height
          }
        }
        excerpt
        richText {
          raw
          text
          html
        }
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
        seo {
          stage
          title
          noIndex
          keyWords
          description
          image {
            url
            width
            height
          }
        }
        excerpt
        richText {
          raw
          text
          html
        }
        slug

        urlDemo

        imagePortfolioOne {
          url
          width
          height
        }
        imagePortfolioTwo {
          url
          width
          height
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
        seo {
          stage
          title
          noIndex
          keyWords
          description
          image {
            width
            height
          }
        }
        slug
        id
        coverImage {
          url
          width
          height
        }
        published
        excerpt

        richText {
          raw
          text
          html
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
      blogPosts(first: 2, orderBy: publishedAt_DESC) {
        title
        coverImage {
          url
          width
          height
        }
        id
        seo {
          stage
          title
          noIndex
          keyWords
          description
          image {
            url
            width
            height
          }
        }
        slug
        excerpt
        richText {
          raw
          text
          html
        }
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

export async function getFaqsProps() {
  const FAQS = gql`
    query {
      faqcks {
        title
        content
      }
    }
  `;
  const faqs = await graphcms.request(FAQS);

  return {
    props: faqs,
  };
}

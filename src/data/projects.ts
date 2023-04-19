import { gql } from '@apollo/client';

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    slug
    title
    content
    seo {
        title
        metaDesc
        fullHead
    }
     projectFeatures {
        client
        type
        embed
      }
    categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
    ${PROJECT_FIELDS}
    query SingleProject($slug: ID!) {
        project(id: $slug, idType: SLUG) {
            ...ProjectFields
        }
    }
`;

export const QUERY_ALL_PROJECTS = gql`
    ${PROJECT_FIELDS}
   query AllProjects {
    projects {
      edges {
        node {
         ...ProjectFields
          featuredImage {
            node {
              id
              sizes
              srcSet
              altText
              caption
              sourceUrl
            }
          }
        }
      }
      }
    }
`;

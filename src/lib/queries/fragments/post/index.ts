import { gql } from "@apollo/client";

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
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
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;

export const COMMENTS_FRAGMENT = gql`
  fragment CommentFields on PostToCommentConnection {
    nodes {
      author {
        node {
          gravatarUrl
          name
          url
        }
      }
      approved
      content(format: RENDERED)
      databaseId
      date
      parentId
    }
  }
  `

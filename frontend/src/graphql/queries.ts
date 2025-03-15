import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      id
      resident
      titre
      photo
      comments {
        id
        content
        author
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($getPostByIdId: Float!) {
    getPostById(id: $getPostByIdId) {
      id
      resident
      titre
      photo
      comments {
        id
        content
        author
      }
    }
  }
`;

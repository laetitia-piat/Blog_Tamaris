import { gql } from "@apollo/client";

export const CREATE_NEW_POST = gql`
  mutation CreateNewPost($data: PostInput!) {
    createNewPost(data: $data) {
      id
      resident
      titre
      photo
    }
  }
`;

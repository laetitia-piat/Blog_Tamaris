import { gql } from "@apollo/client";

export const CREATE_NEW_POST = gql`
  mutation CreateNewPost($data: PostInput!) {
    createNewPost(data: $data) {
      id
      residents {
        id
      }
      titre
      photo
    }
  }
`;

export const CREATE_NEW_COMMENT = gql`
  mutation CreateNewComment($data: CommentInput!) {
    createNewComment(data: $data) {
      auteur
      content
      post {
        id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($data: LoginUserInput!) {
    login(data: $data)
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const REGISTER = gql`
  mutation Register($data: UserInput!) {
    register(data: $data)
  }
`;

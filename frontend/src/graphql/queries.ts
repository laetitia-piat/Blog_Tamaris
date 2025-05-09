import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      id
      residents {
        id
        prenom
      }
      titre
      photo
      comments {
        id
        content
        auteur
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($getPostByIdId: Float!) {
    getPostById(id: $getPostByIdId) {
      id
      residents {
        id
      }
      titre
      photo
      comments {
        id
        content
        auteur
      }
    }
  }
`;

export const GET_ALL_RESIDENTS = gql`
  query GetAllResidents {
    getAllResidents {
      id
      prenom
    }
  }
`;

export const GELL_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      email
      role
      resident {
        prenom
      }
    }
  }
`;

export const GET_USER_INFOS = gql`
  query GetUserInfo {
    getUserInfo {
      isLoggedIn
      email
      role
    }
  }
`;

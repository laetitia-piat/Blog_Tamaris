import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      id
      residents {
        id
        name
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

export const GET_POSTS_BY_RESIDENT_ID = gql`
  query GetPostsByResidentId($residentId: Float!) {
    getPostsByResidentId(residentId: $residentId) {
      id
      residents {
        id
        name
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
      name
      isPhotoSharingAllowed
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      userName
      role
      resident {
        name
      }
    }
  }
`;

export const GET_USER_INFOS = gql`
  query GetUserInfo {
    getUserInfo {
      isLoggedIn
      userName
      role
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query GetUserByUserName($userName: String!) {
    getUserByUserName(userName: $userName) {
      id
      userName
      role
      resident {
        id
        name
      }
    }
  }
`;

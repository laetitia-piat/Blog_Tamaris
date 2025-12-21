import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  auteur: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  post: Post;
};

export type CommentInput = {
  auteur: Scalars['String']['input'];
  content: Scalars['String']['input'];
  post: Scalars['ID']['input'];
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewComment: Comment;
  createNewPost: Post;
  login: Scalars['String']['output'];
  logout: Scalars['String']['output'];
  register: Scalars['String']['output'];
};


export type MutationCreateNewCommentArgs = {
  data: CommentInput;
};


export type MutationCreateNewPostArgs = {
  data: PostInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationRegisterArgs = {
  data: UserInput;
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Comment>>;
  id: Scalars['Float']['output'];
  photo: Scalars['String']['output'];
  residents?: Maybe<Array<Resident>>;
  titre: Scalars['String']['output'];
};

export type PostInput = {
  photo: Scalars['String']['input'];
  residents?: InputMaybe<Array<ResidentInput>>;
  titre: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Comment>;
  getAllPosts: Array<Post>;
  getAllResidents: Array<Resident>;
  getAllUsers: Array<User>;
  getCommentById: Comment;
  getPostById: Post;
  getPostsByResidentId: Array<Post>;
  getResidentById: Resident;
  getUserByUserName: User;
  getUserInfo: UserInfo;
};


export type QueryGetCommentByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetPostsByResidentIdArgs = {
  residentId: Scalars['Float']['input'];
};


export type QueryGetResidentByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserByUserNameArgs = {
  userName: Scalars['String']['input'];
};

export type Resident = {
  __typename?: 'Resident';
  id: Scalars['Float']['output'];
  isPhotoSharingAllowed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  users: Array<User>;
};

export type ResidentInput = {
  id: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  hashedPassword: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  resident: Resident;
  role: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  isLoggedIn: Scalars['Boolean']['output'];
  role?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  password: Scalars['String']['input'];
  residentId?: InputMaybe<Scalars['Float']['input']>;
  role: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type CreateNewPostMutationVariables = Exact<{
  data: PostInput;
}>;


export type CreateNewPostMutation = { __typename?: 'Mutation', createNewPost: { __typename?: 'Post', id: number, titre: string, photo: string, residents?: Array<{ __typename?: 'Resident', id: number }> | null } };

export type CreateNewCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateNewCommentMutation = { __typename?: 'Mutation', createNewComment: { __typename?: 'Comment', auteur: string, content: string, post: { __typename?: 'Post', id: number } } };

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type RegisterMutationVariables = Exact<{
  data: UserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: string };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', getAllPosts: Array<{ __typename?: 'Post', id: number, titre: string, photo: string, residents?: Array<{ __typename?: 'Resident', id: number, name: string }> | null, comments?: Array<{ __typename?: 'Comment', id: number, content: string, auteur: string }> | null }> };

export type GetPostByIdQueryVariables = Exact<{
  getPostByIdId: Scalars['Float']['input'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostById: { __typename?: 'Post', id: number, titre: string, photo: string, residents?: Array<{ __typename?: 'Resident', id: number }> | null, comments?: Array<{ __typename?: 'Comment', id: number, content: string, auteur: string }> | null } };

export type GetPostsByResidentIdQueryVariables = Exact<{
  residentId: Scalars['Float']['input'];
}>;


export type GetPostsByResidentIdQuery = { __typename?: 'Query', getPostsByResidentId: Array<{ __typename?: 'Post', id: number, titre: string, photo: string, residents?: Array<{ __typename?: 'Resident', id: number, name: string }> | null, comments?: Array<{ __typename?: 'Comment', id: number, content: string, auteur: string }> | null }> };

export type GetAllResidentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllResidentsQuery = { __typename?: 'Query', getAllResidents: Array<{ __typename?: 'Resident', id: number, name: string }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: number, userName: string, role: string, resident: { __typename?: 'Resident', name: string } }> };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserInfo', isLoggedIn: boolean, userName?: string | null, role?: string | null } };

export type GetUserByUserNameQueryVariables = Exact<{
  userName: Scalars['String']['input'];
}>;


export type GetUserByUserNameQuery = { __typename?: 'Query', getUserByUserName: { __typename?: 'User', id: number, userName: string, role: string, resident: { __typename?: 'Resident', id: number, name: string } } };


export const CreateNewPostDocument = gql`
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
export type CreateNewPostMutationFn = Apollo.MutationFunction<CreateNewPostMutation, CreateNewPostMutationVariables>;

/**
 * __useCreateNewPostMutation__
 *
 * To run a mutation, you first call `useCreateNewPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewPostMutation, { data, loading, error }] = useCreateNewPostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewPostMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewPostMutation, CreateNewPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewPostMutation, CreateNewPostMutationVariables>(CreateNewPostDocument, options);
      }
export type CreateNewPostMutationHookResult = ReturnType<typeof useCreateNewPostMutation>;
export type CreateNewPostMutationResult = Apollo.MutationResult<CreateNewPostMutation>;
export type CreateNewPostMutationOptions = Apollo.BaseMutationOptions<CreateNewPostMutation, CreateNewPostMutationVariables>;
export const CreateNewCommentDocument = gql`
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
export type CreateNewCommentMutationFn = Apollo.MutationFunction<CreateNewCommentMutation, CreateNewCommentMutationVariables>;

/**
 * __useCreateNewCommentMutation__
 *
 * To run a mutation, you first call `useCreateNewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewCommentMutation, { data, loading, error }] = useCreateNewCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewCommentMutation, CreateNewCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewCommentMutation, CreateNewCommentMutationVariables>(CreateNewCommentDocument, options);
      }
export type CreateNewCommentMutationHookResult = ReturnType<typeof useCreateNewCommentMutation>;
export type CreateNewCommentMutationResult = Apollo.MutationResult<CreateNewCommentMutation>;
export type CreateNewCommentMutationOptions = Apollo.BaseMutationOptions<CreateNewCommentMutation, CreateNewCommentMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginUserInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: UserInput!) {
  register(data: $data)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetAllPostsDocument = gql`
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

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
// @ts-ignore
export function useGetAllPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export function useGetAllPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllPostsQuery | undefined, GetAllPostsQueryVariables>;
export function useGetAllPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsSuspenseQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPostByIdDocument = gql`
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

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      getPostByIdId: // value for 'getPostByIdId'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables> & ({ variables: GetPostByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
// @ts-ignore
export function useGetPostByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export function useGetPostByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetPostByIdQuery | undefined, GetPostByIdQueryVariables>;
export function useGetPostByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdSuspenseQueryHookResult = ReturnType<typeof useGetPostByIdSuspenseQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetPostsByResidentIdDocument = gql`
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

/**
 * __useGetPostsByResidentIdQuery__
 *
 * To run a query within a React component, call `useGetPostsByResidentIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsByResidentIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsByResidentIdQuery({
 *   variables: {
 *      residentId: // value for 'residentId'
 *   },
 * });
 */
export function useGetPostsByResidentIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables> & ({ variables: GetPostsByResidentIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>(GetPostsByResidentIdDocument, options);
      }
export function useGetPostsByResidentIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>(GetPostsByResidentIdDocument, options);
        }
// @ts-ignore
export function useGetPostsByResidentIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>;
export function useGetPostsByResidentIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetPostsByResidentIdQuery | undefined, GetPostsByResidentIdQueryVariables>;
export function useGetPostsByResidentIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>(GetPostsByResidentIdDocument, options);
        }
export type GetPostsByResidentIdQueryHookResult = ReturnType<typeof useGetPostsByResidentIdQuery>;
export type GetPostsByResidentIdLazyQueryHookResult = ReturnType<typeof useGetPostsByResidentIdLazyQuery>;
export type GetPostsByResidentIdSuspenseQueryHookResult = ReturnType<typeof useGetPostsByResidentIdSuspenseQuery>;
export type GetPostsByResidentIdQueryResult = Apollo.QueryResult<GetPostsByResidentIdQuery, GetPostsByResidentIdQueryVariables>;
export const GetAllResidentsDocument = gql`
    query GetAllResidents {
  getAllResidents {
    id
    name
  }
}
    `;

/**
 * __useGetAllResidentsQuery__
 *
 * To run a query within a React component, call `useGetAllResidentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllResidentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllResidentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllResidentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllResidentsQuery, GetAllResidentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllResidentsQuery, GetAllResidentsQueryVariables>(GetAllResidentsDocument, options);
      }
export function useGetAllResidentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllResidentsQuery, GetAllResidentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllResidentsQuery, GetAllResidentsQueryVariables>(GetAllResidentsDocument, options);
        }
// @ts-ignore
export function useGetAllResidentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllResidentsQuery, GetAllResidentsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllResidentsQuery, GetAllResidentsQueryVariables>;
export function useGetAllResidentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllResidentsQuery, GetAllResidentsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllResidentsQuery | undefined, GetAllResidentsQueryVariables>;
export function useGetAllResidentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllResidentsQuery, GetAllResidentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllResidentsQuery, GetAllResidentsQueryVariables>(GetAllResidentsDocument, options);
        }
export type GetAllResidentsQueryHookResult = ReturnType<typeof useGetAllResidentsQuery>;
export type GetAllResidentsLazyQueryHookResult = ReturnType<typeof useGetAllResidentsLazyQuery>;
export type GetAllResidentsSuspenseQueryHookResult = ReturnType<typeof useGetAllResidentsSuspenseQuery>;
export type GetAllResidentsQueryResult = Apollo.QueryResult<GetAllResidentsQuery, GetAllResidentsQueryVariables>;
export const GetAllUsersDocument = gql`
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

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
// @ts-ignore
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllUsersQuery | undefined, GetAllUsersQueryVariables>;
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo {
  getUserInfo {
    isLoggedIn
    userName
    role
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
// @ts-ignore
export function useGetUserInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export function useGetUserInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserInfoQuery | undefined, GetUserInfoQueryVariables>;
export function useGetUserInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserInfoSuspenseQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetUserByUserNameDocument = gql`
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

/**
 * __useGetUserByUserNameQuery__
 *
 * To run a query within a React component, call `useGetUserByUserNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByUserNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByUserNameQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useGetUserByUserNameQuery(baseOptions: Apollo.QueryHookOptions<GetUserByUserNameQuery, GetUserByUserNameQueryVariables> & ({ variables: GetUserByUserNameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>(GetUserByUserNameDocument, options);
      }
export function useGetUserByUserNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>(GetUserByUserNameDocument, options);
        }
// @ts-ignore
export function useGetUserByUserNameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>;
export function useGetUserByUserNameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserByUserNameQuery | undefined, GetUserByUserNameQueryVariables>;
export function useGetUserByUserNameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>(GetUserByUserNameDocument, options);
        }
export type GetUserByUserNameQueryHookResult = ReturnType<typeof useGetUserByUserNameQuery>;
export type GetUserByUserNameLazyQueryHookResult = ReturnType<typeof useGetUserByUserNameLazyQuery>;
export type GetUserByUserNameSuspenseQueryHookResult = ReturnType<typeof useGetUserByUserNameSuspenseQuery>;
export type GetUserByUserNameQueryResult = Apollo.QueryResult<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>;
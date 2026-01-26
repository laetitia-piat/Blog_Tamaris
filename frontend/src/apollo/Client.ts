import { ApolloClient, InMemoryCache } from "@apollo/client";
import { authLink } from "./authLink";
import { httpLink } from "./httpLink";

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

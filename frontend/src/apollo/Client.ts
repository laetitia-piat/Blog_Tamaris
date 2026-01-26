import { ApolloClient, InMemoryCache } from "@apollo/client";
import { authLink } from "./AuthLink";
import { httpLink } from "./HttpLink";

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

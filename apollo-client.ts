import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_URL
    ? process.env.API_URL
    : "http://localhost:8082/graphql",
  cache: new InMemoryCache(),
});

export default client;

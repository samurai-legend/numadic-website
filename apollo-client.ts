import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_URL
    ? process.env.API_URL
    : "http://localhost:8082/graphql",
  headers: {
    Authorization: `bearer ${process.env.ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;

import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
export const client = new ApolloClient({
    uri: "https://t-money-api-vugb2.ondigitalocean.app/graphql",
    cache: new InMemoryCache(),
});
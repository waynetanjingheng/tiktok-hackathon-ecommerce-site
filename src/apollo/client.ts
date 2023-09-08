import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
    ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    }
});

const authLink = new ApolloLink((operation, forward) => {
    const apiKey = process.env.REACT_APP_MARKETPLACE_BUSINESS_API_KEY;

    operation.setContext({
        headers: {
            authorization: apiKey ? `Bearer ${apiKey}` : "",
        },
    });

    return forward(operation);
});

const link = from([
    errorLink,
    authLink,
    new HttpLink({
        uri: "https://t-money-api-vugb2.ondigitalocean.app/graphql",
    }),
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

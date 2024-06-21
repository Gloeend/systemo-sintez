import { ApolloClient, InMemoryCache } from '@apollo/client';
import {WebSocketLink} from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
    uri: import.meta.env.VITE_BACKEND_WS, // replace with your GraphQL API URL
    options: {
        reconnect: true,
    },
});

const clientWebsocket = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
});

export default clientWebsocket;
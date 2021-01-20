import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApolloProvider } from '@apollo/client';
import client  from './src/graphql/apollo';


const Main = () => {
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);

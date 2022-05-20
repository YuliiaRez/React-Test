import React, { Component } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

import HomePage from "./pages/HomePage";

export default class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <HomePage />
        </ApolloProvider>
      </div>
    );
  }
}

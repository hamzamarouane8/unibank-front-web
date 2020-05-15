import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GlobalEvents } from '@sgabskit/eventbus';
import isEmpty from 'lodash.isempty'

export default class GraphClient {

  constructor(uri) {
    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    };
    this.client = new ApolloClient({
      uri, cache: new InMemoryCache({
        addTypename: false,
      }),
    });
    this.client.defaultOptions = defaultOptions;
  }

  call = (query, variables) => {

    let res = null;
    if (query.trim().indexOf('mutation') === 0) {
      res = this.client.mutate({ mutation: gql`${query}`, variables });
    } else {
      res = this.client.query({ query: gql`${query}`, variables });
    }

    return res.then(({ data, errors }) => {

      if (!isEmpty(errors)) {
        throw new Error(errors[0].message)
      }
      const keys = Object.keys(data);
      return (keys.length === 1) ? data[keys[0]] : data;

    }).catch((err) => {
      GlobalEvents.publish('message', { error: err.message });
    });
  };

}


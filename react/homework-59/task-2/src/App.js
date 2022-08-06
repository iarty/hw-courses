import React, { Component, Fragment } from 'react';
import ChuckNorrisJokes from './Containers/ChuckNorrisJokes/ChuckNorrisJokes';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <ChuckNorrisJokes />
      </Fragment>
    )
  }
}

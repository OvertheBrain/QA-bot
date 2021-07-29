import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Tester, TestHookStore} from 'cavy';
import ExampleSpec from './specs/exampleSpec';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <Tester specs={[ExampleSpec]} store={testHookStore}>
        // Your app goes here
      </Tester>
    );
  }
}

AppRegistry.registerComponent('yourAppName', () => AppWrapper);

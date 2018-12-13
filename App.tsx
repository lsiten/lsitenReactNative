/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import Home from './src/pages/home/index'

type Props = {};
export default class App extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Home></Home>
    );
  }
}

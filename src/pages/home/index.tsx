import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './components/header';
import Footer from './components/footer';
import MyTable from './components/table';

type Props = {};
export default class Home extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <View style={styles.containter}>
        <Header></Header>
        <View style={styles.h2}>
          <Text style={styles.h2Text}>Build Challenge List</Text>
        </View>
        <MyTable></MyTable>
        <Footer></Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#242524'
  },
  h2: {
    height: 30,
    backgroundColor: '#3F3F3F'
  },
  h2Text: {
    lineHeight: 30,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

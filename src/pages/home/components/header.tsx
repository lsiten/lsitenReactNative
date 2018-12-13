import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};

export default class Header extends React.Component<Props> {
  render (): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../../asset/img/logo.png')} style={styles.logo}></Image>
          <View style={styles.des}>
            <Text style={styles.desText}>CHALLENGE DETAILS</Text>
            <Text style={Object.assign({}, styles.desText, styles.desTextBody)}>
            Game No.0000085CM
            </Text>
            <Text style={Object.assign({}, styles.desText, styles.desTextBody)}>
            10/10/18 at 3:45 pm
            </Text>
            <Text style={Object.assign({}, styles.desText, styles.desTextBody)}>
            Coyote Moon Golf Course
            </Text>
            <Text style={Object.assign({}, styles.desText, styles.desTextBody)}>
            Truckee Colifornia
            </Text>
          </View>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    height: 140,
    paddingTop: 10,
    paddingBottom: 10
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  des: {
    flex: 1,
    padding: 10
  },
  desText: {
    color: '#ffffff'
  },
  desTextBody: {
    fontSize: 12
  }
});
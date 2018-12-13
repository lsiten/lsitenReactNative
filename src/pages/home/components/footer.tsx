import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};

export default class Footer extends React.Component<Props> {
  render (): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>
            ISSUE CHALLENGE >
          </Text>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    height: 86,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#929292',
    borderTopWidth: 1,
  },
  buttonView: {
    backgroundColor: '#F07D22',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
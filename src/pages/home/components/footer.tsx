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
        <Text>footer</Text>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    height: 46
  }
});
import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};

export default class MyTable extends React.Component<Props> {
  render (): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>table</Text>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
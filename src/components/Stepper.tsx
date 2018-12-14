import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {
  value: number;
  onChange: (value: any) => void;
};

export default class Stepper extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  increase () {
    let value = this.props.value + 1;
    this.props.onChange(value);
  }
  reduce () {
    let value = this.props.value - 1;
    this.props.onChange(value);
  }
  render (): React.ReactNode {
    return (
      <View style={styles.constainer}>
        <Text style={styles.opteration} onPress={() => {this.increase()}}>＋</Text><Text style={styles.showText}>{this.props.value}</Text><Text onPress={() => {this.reduce()}} style={styles.opteration}>－</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'row',
  },
  opteration: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 30,
    width: 30,
    textAlign: 'center',
    height: 30,
  },
  showText: {
    color: '#000000',
    fontSize: 14,
    padding: 5,
    width: 30,
    height: 30,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  }
})

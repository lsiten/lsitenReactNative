import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Modal
} from 'react-native';

import Stepper from '../../../components/Stepper';

type Props = {};

export default class MyTable extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShowModel: false,
      transparent: true,
      stepValue1: 5,
      stepValue2: 5
    };
  }
  state: any
  showModel () {
    this.setState({
      isShowModel: true
    })
  }
  closeModel () {
    this.setState({
      isShowModel: false
    })
  }
  stepChange (value:any) {
    this.setState({
      stepValue1: value
    });
  }
  stepChange2 (value:any) {
    this.setState({
      stepValue2: value
    });
  }
  search () {}
  render (): React.ReactNode {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.tableHeader}>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              Name
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              Front9
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              Back9
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              Total Score
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={Object.assign({}, styles.tableCol, styles.tableColRow)}>
            <Text style={Object.assign({}, styles.tableColText, styles.tableColCiryle, styles.tableColGreen)}>
              CH
            </Text>
            <Text style={Object.assign({}, styles.tableColText, {
              lineHeight: 30,
              textAlign: 'center',
              marginLeft: 5,
            })}>
              Craig H
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={Object.assign({}, styles.tableCol, styles.tableColRow)}>
            <Text style={Object.assign({}, styles.tableColText, styles.tableColCiryle, styles.tableColOrange)}>
              TN
            </Text>
            <Text style={Object.assign({}, styles.tableColText, {
              lineHeight: 30,
              textAlign: 'center',
              marginLeft: 5,
            })}>
              Tom N
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={Object.assign({}, styles.tableCol, styles.tableColRow)}>
            <Text style={Object.assign({}, styles.tableColText, styles.tableColCiryle, styles.tableColBlue)}>
              LJ
            </Text>
            <Text style={Object.assign({}, styles.tableColText, {
              lineHeight: 30,
              textAlign: 'center',
              marginLeft: 5,
            })}>
              Luxi J
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              5
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={Object.assign({}, styles.tableCol, styles.tableColRow)}>
            <Text
             onPress={() => {this.showModel()}}
             style={Object.assign({}, styles.tableColText, styles.tableColCiryle, styles.tableColgrey)}>
              +
            </Text>
            <Text
             style={Object.assign({}, styles.tableColText, {
              lineHeight: 30,
              textAlign: 'center',
              marginLeft: 5,
            })}>
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              -
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              -
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableColText}>
              -
            </Text>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={this.state.transparent}
          visible={this.state.isShowModel}
          onRequestClose={() => {
            this.closeModel()
          }}
        >
          <View style={styles.modalMask}>
            <View style={styles.modalBody}>
              <View style={styles.modalHeader}>
                <Text style={styles.modelClose} onPress={() => {this.closeModel()}}>×</Text>
                <Text style={styles.modalHeaderText}>CHALLENG ADDITIONAL PLAYERS</Text>
              </View>
              <View style={styles.modalContent}>
                <View style={styles.modalContentSearch}>
                  <TextInput
                    style={styles.modalContentSearchInput}
                    placeholder="Please Input Keyword"
                    onChangeText={(text) => this.setState({text})}
                  />
                  <Image source={require('../../../asset/img/search.png')} style={styles.modalContentSearchImage}/>
                </View>

                  <View style={styles.modalContentTable}>
                      <View style={[styles.modalContentTableRow, {marginTop: 10, borderBottomColor: '#FFFFFF', borderBottomWidth: 1,paddingBottom: 10}]}>
                          <View style={Object.assign({}, styles.modalContentTableCol, styles.tableColRow, {paddingLeft: 20,})}>
                              <Text style={Object.assign({}, styles.tableColText, styles.tableColCiryle, styles.tableColBlue)}>
                                LJ
                              </Text>
                              <Text style={Object.assign({}, styles.tableColText, {
                                lineHeight: 30,
                                textAlign: 'center',
                                marginLeft: 5,
                              })}>
                                Luxi J
                              </Text>
                          </View>
                          <View style={styles.modalContentTableCol}>
                            <Stepper
                              value={this.state.stepValue1}
                              onChange={key => {
                                this.stepChange(key)
                              }}
                            ></Stepper>
                          </View>
                      </View>
                  </View>

                  <View style={styles.modalContentTable}>
                      <View style={[styles.modalContentTableRow, {marginTop: 10,paddingBottom: 10}]}>
                          <View style={Object.assign({}, styles.modalContentTableCol, styles.tableColRow, {paddingLeft: 20,})}>
                              <Text style={Object.assign({}, styles.tableColText, styles.tableColCiryle, styles.tableColGreen)}>
                                BZ
                              </Text>
                              <Text style={Object.assign({}, styles.tableColText, {
                                lineHeight: 30,
                                textAlign: 'center',
                                marginLeft: 5,
                              })}>
                                Bin Zhang
                              </Text>
                          </View>
                          <View style={styles.modalContentTableCol}>
                            <Stepper
                              value={this.state.stepValue2}
                              onChange={key => {
                                this.stepChange2(key)
                              }}
                            ></Stepper>
                          </View>
                      </View>
                  </View>
              </View>


              <View style={styles.modelFooter}>
                <Text style={styles.modelFooterButton}>NEXT ></Text>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  modalMask: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  modalBody: {
    height: 280,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
  },
  modalHeader: {
    paddingTop: 40
  },
  modalHeaderText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modelClose: {
    position: 'absolute',
    fontSize: 25,
    width: 30,
    height: 30,
    right: 5,
    top: 5,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalContent: {
  },
  modalContentSearch: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContentSearchInput: {
    backgroundColor: '#FFFFFF',
    height: 30,
    paddingTop: 3,
    paddingLeft: 10,
    paddingBottom: 3,
    paddingRight: 10,
    margin: 0,
    fontSize: 12,
    width: 200
  },
  modalContentSearchImage: {
    width: 30,
    height: 30,
    margin: 0,
    backgroundColor: '#585757',
  },
  modalContentTable: {},
  modalContentTableRow: {
    flexDirection: 'row'
  },
  modalContentTableCol: {},

  modelFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  modelFooterButton: {
    color: '#FFFFFF',
    lineHeight: 30,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center',
    backgroundColor: '#6EAF3F',
  },

  tableHeader: {
    alignItems: 'center',
    backgroundColor: '#3F3F3F',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableCol: {
    flex: 1,
  },
  tableColRow: {
    flex: 1,
    flexDirection: 'row',
  },
  tableColText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14
  },
  tableColCiryle: {
    borderRadius: 15,
    width: 30,
    height: 30,
    lineHeight: 30
  },
  tableColGreen: {
    backgroundColor: '#44B62A',
    color: '#153811'
  },
  tableColOrange: {
    backgroundColor: '#E55B21',
    color: '#381713'
  },
  tableColBlue: {
    backgroundColor: '#15C5C5',
    color: '#0F4B36'
  },
  tableColgrey: {
    backgroundColor: '#A6A6A6',
    color: '#000000',
    fontSize: 25,
  },
  tableRow: {
    height: 60,
    flexDirection: 'row',
    borderBottomColor: '#929292',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
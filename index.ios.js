/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativeSlideyTabs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <View style={[styles.tabsLeft]}>
            <Text style={[styles.tabsText]}>
              Left
            </Text>
          </View>
          <View style={[styles.tabsCenter]}>
            <Text style={[styles.tabsText]}>
              Home
            </Text>
          </View>
          <View style={[styles.tabsRight]}>
            <Text style={[styles.tabsText]}>
              Right
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabs: {
    height: 60,
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tabsLeft: {
    width: 90,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  tabsCenter: { 
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabsRight: {
    width: 90,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  tabsText: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: 'green'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeSlideyTabs', () => ReactNativeSlideyTabs)

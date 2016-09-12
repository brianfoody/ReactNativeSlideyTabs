/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet, 
  Text, 
  View
} from 'react-native'

import SlideyTabs from './src/components/SlideyTabs'

class ReactNativeSlideyTabs extends Component {
  render() {
    return (
      <SlideyTabs titles={["Home", "Trending", "My place"]}
                  pannerStyle={{backgroundColor: 'white'}}
                  navStyle={{height: 50, backgroundColor: 'red'}}>

        <View style={[styles.content, styles.contentItem]}>
          <Text style={[styles.contentText]}>
            Home
          </Text>
        </View>
        <View style={[styles.content, styles.contentItem]}>
          <Text style={[styles.contentText]}>
            Trending
          </Text>
        </View>
        <View style={[styles.content, styles.contentItem]}>
          <Text style={[styles.contentText]}>
            My place
          </Text>
        </View>

      </SlideyTabs>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  contentItem: {
    backgroundColor: 'white',
  },
  contentText: {
    color: 'black',
    fontSize: 16,
  },
})


AppRegistry.registerComponent('ReactNativeSlideyTabs', () => ReactNativeSlideyTabs)
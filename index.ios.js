/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  ScrollView,
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
                  navStyle={{height: 50, backgroundColor: 'red'}}
                  noSlidey={true}>

        <ScrollView style={{flex: 1}} contentContainerStyle={[styles.contentItem]}>
          <View style={[styles.chunk, {backgroundColor: 'red'}]} />
          <View style={[styles.chunk, {backgroundColor: 'green'}]} />
          <View style={[styles.chunk, {backgroundColor: 'blue'}]} />
          <View style={[styles.chunk, {backgroundColor: 'purple'}]} />
        </ScrollView>
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
  chunk: {
    height: 200,
    width: 300,
  }
})


AppRegistry.registerComponent('ReactNativeSlideyTabs', () => ReactNativeSlideyTabs)
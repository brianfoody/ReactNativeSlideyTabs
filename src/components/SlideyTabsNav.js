import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native'

class SlideyTabsNav extends Component {

  render() {
    const {goToTab, navStyle, titles} = this.props

    const tabTitles = titles || []

    return (
      <View style={[styles.tabs, navStyle]}>

        {tabTitles.map((title, i) => {
            return (
              <TouchableHighlight 
                key={title}
                underlayColor="transparent"
                style={[styles.tabItem]}
                onPress={() => goToTab(i)}>
                <Text style={[styles.tabsText]}>
                  {title}
                </Text>
              </TouchableHighlight>
            )
          }
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 60,
    backgroundColor: 'purple',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  tabItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabsText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
})

export default SlideyTabsNav
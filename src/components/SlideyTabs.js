import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import SlideyTabsNav from './SlideyTabsNav'
import SlideyTabsContent from './SlideyTabsContent'

class SlideyTabs extends Component {

  goToTab(tabNumber)
  {
    this.refs.TabsContent.slideToTab(tabNumber)
  }

  render() {
    const {noSlidey, pannerStyle, navStyle, titles} = this.props
    
    return (
      <View style={styles.container}>
        <SlideyTabsNav ref="TabsNav" 
                       goToTab={this.goToTab.bind(this)}
                       navStyle={navStyle}
                       titles={titles} />
        <SlideyTabsContent ref="TabsContent"
                           pannerStyle={pannerStyle}
                           noSlidey={noSlidey}>
         {this.props.children}
        </SlideyTabsContent>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SlideyTabs
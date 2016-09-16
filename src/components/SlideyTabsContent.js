import React, { Component } from 'react'
import {
  AppRegistry,
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native'

const windowDimensions = Dimensions.get('window')
const yes = () => true

class SlideyTabsContent extends Component {

  constructor(props) {
    super(props)  

    this.state = {
      initialValue: new Animated.Value(0),
      pannerPosition: new Animated.Value(0),
      tabPosition: new Animated.Value(0),
      tabsLoaded: []
    }

    this.state.transformation = {
      transform: [
        {
          translateX: this.state.tabPosition
        }
      ]
    }

    this.state.pannerTransformation = {
      transform: [
        {
          translateX: this.state.pannerPosition
        }
      ]
    }
  }

  slideToTab(tabNumber)
  {
    this._changeToTab(tabNumber)
  }

  // This will take a min and max value and return 
  _getAbsoluteValue(val, min = windowDimensions.width * -2, max = 0)
  {
    if (val < min)
      return min
    else if (val > max)
      return max
    else 
      return val
  }

  componentDidMount() {
    this.checkOnFirstLoad(0)
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: yes,
      onMoveShouldSetResponderCapture: yes, // Tell iOS that we are allowing the movement
      onMoveShouldSetPanResponderCapture: yes, // Same here, tell iOS that we allow dragging
      onPanResponderGrant: (e, gestureState) => {
        // do any initial setup
        const {tabPosition} = this.state

        this.state.initialValue.setValue(Math.round(tabPosition._value))
      },
      // Creates a function to handle the movement and set offsets
      onPanResponderMove: (evt, {dx, dy}) => {
        const {initialValue, tabPosition} = this.state
        const viewCount = this.props.children.length

        const calculatedNewVal = this._getAbsoluteValue(initialValue._value + dx)

        this.state.tabPosition.setValue(calculatedNewVal)
        this.state.pannerPosition.setValue(Math.abs(calculatedNewVal / viewCount))
      }, 
      onPanResponderRelease: (e, {dx, vx}) => {
        if (Math.abs(vx) > 1)
          this._changeTabInDirection(vx)
        else if (Math.abs(dx) >= (windowDimensions.width / 4))
          this._changeTabInDirection(dx)
        else 
          this._springBack()
      }
    })
  }

  _springBack()
  {
    const viewCount = this.props.children.length

    Animated.spring(this.state.tabPosition, {
      toValue: this.state.initialValue._value,
      friction: 7
    }).start()
    Animated.spring(this.state.pannerPosition, {
      toValue: Math.abs(this.state.initialValue._value / viewCount),
      friction: 7
    }).start()
  }

  _changeTabInDirection(direction)
  {
    const viewCount = this.props.children.length

    const relativeDirection = direction < 0 ? 1 : -1

    const currentTab = this._deriveCurrentTab(this.state.initialValue._value)

    const calculatedNewPosition = this._getAbsoluteValue((currentTab + relativeDirection) * windowDimensions.width * -1)

    const newTab = this._deriveCurrentTab(calculatedNewPosition)

    this.checkOnFirstLoad(newTab)

    Animated.spring(this.state.tabPosition, {
      toValue: calculatedNewPosition,
      friction: 10  
    }).start()
    Animated.spring(this.state.pannerPosition, {
      toValue: Math.abs(calculatedNewPosition / viewCount),
      friction: 10  
    }).start()
  }

  _changeToTab(tabNumber)
  {
    const {tabs} = this.props
    const viewCount = this.props.children.length

    const calculatedNewPosition = tabNumber * windowDimensions.width * -1

    this.checkOnFirstLoad(tabNumber)

    Animated.spring(this.state.tabPosition, {
      toValue: calculatedNewPosition,
      friction: 12  
    }).start()

    Animated.spring(this.state.pannerPosition, {
      toValue: Math.abs(calculatedNewPosition / viewCount),
      friction: 12 
    }).start()
  }

  _deriveTabFromPosition(position)
  {
    return Math.floor(Math.abs(position) / windowDimensions.width)
  }

  checkOnFirstLoad(tabNumber)
  {
    const {onFirstLoad} = this.props
    const {tabsLoaded} = this.state

    if (tabsLoaded.indexOf(tabNumber) == -1)
    {
      onFirstLoad && onFirstLoad(tabNumber)
      this.setState({tabsLoaded: tabsLoaded.concat([tabNumber])})
    }
  }

  render() {
    const {pannerTransformation, transformation} = this.state
    const {noSlidey, pannerStyle, tabs} = this.props

    const viewCount = this.props.children.length

    const width = windowDimensions.width * viewCount

    const pannerWidth = {width: windowDimensions.width / viewCount}

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.innerContainer, {width: width}, transformation]}
                       {...(noSlidey ? {} : this._panResponder.panHandlers)}>

         {this.props.children}

        </Animated.View>
        <Animated.View style={[styles.panner, pannerTransformation, pannerWidth, pannerStyle]}></Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row'
  },
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
  panner: {
    position: 'absolute',
    top: -4,
    left: 0,
    height: 3.5,
    backgroundColor: 'white'
  }
})

export default SlideyTabsContent
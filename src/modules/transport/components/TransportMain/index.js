import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import TransportGrid from '../TransportGrid'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator, WhiteSpace } from 'antd-mobile'
import Carousel from '../Carousel'

class TransportMain extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.initialFetchTransports(this.props.username)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    return false
  }

  render() {
    const {
      navToPublish,
      navToSubmit,
      navToAssign,
      navToAccept,
      navToRefuse,
      assignCount,
      acceptCount,
      refuseCount,
      submitCount
    } = this.props
    const gridData = [
      {
        icon: 'clipboard',
        text: '发单',
        action: navToPublish
      },
      {
        icon: 'edit',
        text: '审单',
        badge: submitCount,
        action: navToSubmit
      },
      {
        icon: 'bus',
        text: '未接',
        badge: assignCount,
        action: navToAssign
      },
      {
        icon: 'truck',
        text: '已接',
        badge: acceptCount,
        action: navToAccept
      },
      {
        icon: 'ban',
        text: '拒单',
        badge: refuseCount,
        action: navToRefuse
      }
    ]
    return (
      <View style={styles.container}>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <WhiteSpace size='xl' />
        <View style={styles.grid}>
          <ErrorBoundary>
            <TransportGrid data={gridData} />
          </ErrorBoundary>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  grid: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  }
})

export default TransportMain

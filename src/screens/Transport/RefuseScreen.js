import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  RefuseList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class RefuseScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输界面',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <RefuseList />
      </View>
    )
  }
}

export default RefuseScreen

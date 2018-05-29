import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  SubmitList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class SubmitScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输界面',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <SubmitList />
      </View>
    )
  }
}

export default SubmitScreen

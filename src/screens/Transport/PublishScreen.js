import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  PublishForm
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class PublishScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输界面',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <PublishForm />
      </View>
    )
  }
}

export default PublishScreen

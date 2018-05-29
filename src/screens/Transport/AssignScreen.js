import React from 'react'
import { View } from 'react-native'
import {
  BackToMainButton,
  AssignList
} from '../../modules/transport/containers'
import { WhiteSpace } from 'antd-mobile'

class AssignScreen extends React.PureComponent {
  static navigationOptions = {
    title: '运输界面',
    headerLeft: <BackToMainButton />
  }

  render() {
    return (
      <View>
        <WhiteSpace size='xl' />
        <AssignList />
      </View>
    )
  }
}

export default AssignScreen

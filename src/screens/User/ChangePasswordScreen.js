import React from 'react'
import { BackButton, ChangePasswordForm } from '../../modules/user/containers'

class ChangePasswordScreen extends React.Component {
  static navigationOptions = {
    title: '个人信息',
    headerLeft: <BackButton />
  }

  render() {
    return <ChangePasswordForm />
  }
}

export default ChangePasswordScreen

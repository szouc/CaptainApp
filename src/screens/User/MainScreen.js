import React from 'react'
import { UserMain } from '../../modules/user/containers'

class UserMainScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  render() {
    return <UserMain />
  }
}

export default UserMainScreen

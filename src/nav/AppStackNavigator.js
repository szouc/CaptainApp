import Main from './MainTabNavigator'
import { StackNavigator } from 'react-navigation'
import {
  FuelAddScreen,
  FuelFetchScreen,
  MaintainAddScreen,
  MaintainFetchScreen,
  TransportAcceptScreen,
  TransportAssignScreen,
  TransportSubmitScreen,
  TransportRefuseScreen
} from '../screens'

const AppStackNavigator = StackNavigator(
  {
    Main: { screen: Main },
    FuelAdd: { screen: FuelAddScreen },
    FuelFetch: { screen: FuelFetchScreen },
    MaintainAdd: { screen: MaintainAddScreen },
    MaintainFetch: { screen: MaintainFetchScreen },
    TransAccept: { screen: TransportAcceptScreen },
    TransAssign: { screen: TransportAssignScreen },
    TransSubmit: { screen: TransportSubmitScreen },
    TransRefuse: { screen: TransportRefuseScreen }
  },
  {
    initialRouteName: 'Main'
  }
)

export default AppStackNavigator

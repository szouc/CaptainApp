import React from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import CaptainApp from './src'

// TODO: next stable version should remove this temporary workaround
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

moment.locale('zh-cn')

class App extends React.Component {
  render() {
    return <CaptainApp />
  }
}

export default App

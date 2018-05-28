import React from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import CaptainApp from './src'

moment.locale('zh-cn')

class App extends React.Component {
  render() {
    return <CaptainApp />
  }
}

export default App

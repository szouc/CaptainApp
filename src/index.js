import React, { Component } from 'react'

import AppWithNavState from './App'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

class CaptainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    )
  }
}

export default CaptainApp

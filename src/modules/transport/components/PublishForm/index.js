import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import TransportSubmitForm from './Form'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'

class TransportSubmitFormWithHardwareBack extends Component {
  constructor(props) {
    super(props)
    this.onUserSubmit = props.onSubmit(props.username)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain(this.props.username)
    return true
  }

  render() {
    return (
      <React.Fragment>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <ErrorBoundary>
          <TransportSubmitForm
            username={this.props.username}
            fullname={this.props.fullname}
            onSubmit={this.onUserSubmit}
            loading={this.props.formLoading}
            companies={this.props.companies}
            products={this.props.products}
            vehicles={this.props.vehicles}
          />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

export default TransportSubmitFormWithHardwareBack

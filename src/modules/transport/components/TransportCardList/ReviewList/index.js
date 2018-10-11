import React from 'react'
import InputList from '../InputList'
import OrderList from '../OrderList'
import { List } from 'antd-mobile'
import { Image } from 'react-native'
import { WEB_ADDR } from '../../../../../settings/configs'

class TransportReviewList extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <OrderList transport={this.props.transport} />
        <InputList transport={this.props.transport} />
        <List renderHeader={() => '运输照片'}>
          <Image
            style={{ flex: 1, width: '100%', height: 400 }}
            source={{
              uri: this.props.transport.shippingPic
                ? `${WEB_ADDR}${this.props.transport.shippingPic}`
                : ''
            }}
          />
        </List>
      </React.Fragment>
    )
  }
}

export default TransportReviewList

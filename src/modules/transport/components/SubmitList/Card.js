import React from 'react'
import { Card, WingBlank, Button, WhiteSpace } from 'antd-mobile'
import { TransportReviewList } from '../TransportCardList'
import Icon from 'react-native-vector-icons/FontAwesome'

class TransportCard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.passTransport = props.passTransport(props.transport._id)
    this.denyTransport = props.denyTransport(props.transport._id)
  }

  render() {
    return (
      <Card>
        <Card.Header
          title='待审核'
          thumb={
            <Icon
              name='check-circle'
              size={30}
              style={{ color: '#f00', width: 50 }}
            />
          }
          extra={this.props.index + 1}
        />
        <Card.Body>
          <TransportReviewList transport={this.props.transport} />
          <WhiteSpace size='xl' />
          <WingBlank>
            <Button type='primary' onClick={this.passTransport}>通过</Button>
          </WingBlank>
          <WhiteSpace size='xl' />
          <WingBlank>
            <Button type='warning' onClick={this.denyTransport}>拒绝</Button>
          </WingBlank>
        </Card.Body>
        <Card.Footer />
      </Card>
    )
  }
}

export default TransportCard

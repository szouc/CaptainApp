import React from 'react'
import { List } from 'antd-mobile'
import InputItem from './InputItem'
import extractDataFromProps from '../extractData'

class TransportInputList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.data = extractDataFromProps(this.props)
  }

  render() {
    return (
      <List renderHeader={() => '所填信息'}>
        <InputItem {...this.data.inputProps} />
      </List>
    )
  }
}

export default TransportInputList

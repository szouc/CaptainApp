import React from 'react'
import { PickerField } from '../../../shared'

class ProductPickerField extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProducts(this.props.username)
  }

  getValueFromPicker = value => {
    return value ? value[0] : ''
  }
  setValueToPicker = value => {
    return value ? [value] : []
  }

  render() {
    const { products, ...rest } = this.props
    return (
      <PickerField
        cols={1}
        format={this.setValueToPicker}
        parse={this.getValueFromPicker}
        data={products}
        {...rest}
      />
    )
  }
}

export default ProductPickerField

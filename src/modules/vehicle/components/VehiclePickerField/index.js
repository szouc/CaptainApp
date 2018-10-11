import React from 'react'
import { PickerField } from '../../../shared'

class VehiclePickerField extends React.PureComponent {
  componentDidMount() {
    this.props.fetchVehicles(this.props.username)
  }

  getValueFromPicker = value => {
    return value ? value[0] : ''
  }
  setValueToPicker = value => {
    return value ? [value] : []
  }

  render() {
    const { vehicles, ...rest } = this.props
    return (
      <PickerField
        cols={1}
        format={this.setValueToPicker}
        parse={this.getValueFromPicker}
        data={vehicles}
        {...rest}
      />
    )
  }
}

export default VehiclePickerField

import React from 'react'
import { PickerField } from '../../../shared'

class CompanyPickerField extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCompanies(this.props.username)
  }

  getValueFromPicker = value => {
    return value ? value[0] : ''
  }
  setValueToPicker = value => {
    return value ? [value] : []
  }

  render() {
    const { companies, ...rest } = this.props
    return (
      <PickerField
        cols={1}
        format={this.setValueToPicker}
        parse={this.getValueFromPicker}
        data={companies}
        {...rest}
      />
    )
  }
}

export default CompanyPickerField

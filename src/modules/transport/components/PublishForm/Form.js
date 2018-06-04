import React from 'react'
import { CompanyPickerField } from '../../../company/containers'
import { ProductPickerField } from '../../../product/containers'
import { VehiclePickerField } from '../../../vehicle/containers'
import { reduxForm } from 'redux-form/immutable'
import {
  List,
  WingBlank,
  WhiteSpace,
  Button,
  ActivityIndicator
} from 'antd-mobile'

const validate = values => {
  const errors = {}
  const checkKeys = [
    'fromCompany',
    'toCompany',
    'product',
    'vehicle'
  ]
  checkKeys.map(key => {
    if (!values.get(key)) {
      errors[key] = '必填'
    }
  })
  return errors
}

class TransportSubmitForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      assigner: props.username,
      assignerName: `${props.fullname}(${props.username})`
    }
  }

  selectedVehicleName = (plateKey, engineKey) => value => {
    return this.setState({
      [plateKey]: this.props.vehicles[value].plate,
      [engineKey]: this.props.vehicles[value].engine
    })
  }

  selectedCompanyName = (nameKey, addrKey) => value => {
    return this.setState({
      [nameKey]: this.props.companies[value].name,
      [addrKey]: this.props.companies[value].addr
    })
  }

  selectedProductName = (nameKey, specsKey) => value => {
    console.tron.log(this.props)
    return this.setState({
      [nameKey]: this.props.products[value].name,
      [specsKey]: this.props.products[value].specs
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='提交中...'
          animating={this.props.loading}
        />
        <List renderHeader={() => '添加运输内容'}>
          <VehiclePickerField
            name='vehicle'
            label='指派车辆'
            onChange={this.selectedVehicleName('plate', 'engine')}
          />
          <CompanyPickerField
            name='fromCompany'
            label='出发公司'
            onChange={this.selectedCompanyName('fromName', 'fromAddr')}
          />
          <CompanyPickerField
            name='toCompany'
            label='到达公司'
            onChange={this.selectedCompanyName('toName', 'toAddr')}
          />
          <ProductPickerField
            name='product'
            label='运输货物'
            onChange={this.selectedProductName('productName', 'productSpecs')}
          />
        </List>
        <WhiteSpace />
        <Button onClick={handleSubmit(this.props.onSubmit(this.state))}>
          提交
        </Button>
      </WingBlank>
    )
  }
}

export default reduxForm({
  form: 'TransportCreateForm',
  validate
})(TransportSubmitForm)

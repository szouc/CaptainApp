import { MaintainAddForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { addRequest, backRequest } from '../actions'
import { vehiclePickerSelector, vehicleInitPickerSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const vehicles = vehiclePickerSelector(state)
  const initialValues = vehicleInitPickerSelector(state)
  const loading = state.getIn(['fuel', 'screenLoading'])
  const formLoading = state.getIn(['fuel', 'formLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    vehicles,
    loading,
    formLoading,
    initialValues
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: () => {
      dispatch(backRequest())
    },
    onSubmit: username => values => {
      const vehicleId = values.get('vehicleId')
      const restValue = values.delete('vehicleId')
      const result = { vehicleId, values: [restValue] }

      dispatch(addRequest({ username, data: result }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(MaintainAddForm)
)

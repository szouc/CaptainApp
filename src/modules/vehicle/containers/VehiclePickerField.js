import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchRequest } from '../actions'
import { VehiclePickerField } from '../components'
import { vehiclePickerSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const vehicles = vehiclePickerSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    vehicles
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVehicles: username => {
      dispatch(fetchRequest(username))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(immutPropsToJS(VehiclePickerField))

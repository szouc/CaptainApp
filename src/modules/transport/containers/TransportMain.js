import { TransportMain } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import {
  toAcceptRequest,
  toAssignRequest,
  toSubmitRequest,
  toPublishRequest,
  toRefuseRequest,
  initialRequest
} from '../actions'
import {
  assignCountSelector,
  acceptCountSelector,
  refuseCountSelector,
  submitCountSelector
} from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const loading = state.getIn(['transport', 'screenLoading'])
  const assignCount = assignCountSelector(state)
  const acceptCount = acceptCountSelector(state)
  const refuseCount = refuseCountSelector(state)
  const submitCount = submitCountSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    assignCount,
    acceptCount,
    refuseCount,
    submitCount,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navToAccept: () => {
      dispatch(toAcceptRequest())
    },
    navToAssign: () => {
      dispatch(toAssignRequest())
    },
    navToSubmit: () => {
      dispatch(toSubmitRequest())
    },
    navToPublish: () => {
      dispatch(toPublishRequest())
    },
    navToRefuse: () => {
      dispatch(toRefuseRequest())
    },
    initialFetchTransports: username => {
      dispatch(initialRequest(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(TransportMain)
)

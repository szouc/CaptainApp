import { backRequest, passRequest, denyRequest } from '../actions'

import { SubmitList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { submitArraySelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const transports = submitArraySelector(state)
  const loading = state.getIn(['transport', 'screenLoading'])
  return {
    username: state.getIn(['auth', 'username']),
    loading,
    transports
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    },
    passTransport: username => transportId => () => {
      dispatch(passRequest({ username, transportId }))
    },
    denyTransport: username => transportId => () => {
      dispatch(denyRequest({ username, transportId }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(immutPropsToJS(SubmitList))

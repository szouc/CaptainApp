import { backRequest } from '../actions'

import { ReviewList } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { refuseArraySelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const transports = refuseArraySelector(state)
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(immutPropsToJS(ReviewList))

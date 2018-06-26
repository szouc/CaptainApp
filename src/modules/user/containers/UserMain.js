import { connect } from 'react-redux'
import { UserMain } from '../components'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchProfileRequest, toChangeRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.getIn(['auth', 'username']),
    loading: state.getIn(['user', 'screenLoading']),
    profile: state.getIn(['user', 'profile'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: username => {
      dispatch(fetchProfileRequest(username))
    },
    toChangeScreen: () => {
      dispatch(toChangeRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  immutPropsToJS(UserMain)
)

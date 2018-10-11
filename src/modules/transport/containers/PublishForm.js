import { PublishForm } from '../components'
import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { backRequest, publishRequest } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const loading = state.getIn(['transport', 'screenLoading'])
  const formLoading = state.getIn(['transport', 'formLoading'])
  const companies = state.getIn(['entities', 'companies'])
  const products = state.getIn(['entities', 'products'])
  const vehicles = state.getIn(['entities', 'vehicles'])
  return {
    username: state.getIn(['auth', 'username']),
    fullname: state.getIn(['auth', 'fullname']),
    loading,
    companies,
    products,
    vehicles,
    formLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToMain: username => {
      dispatch(backRequest(username))
    },
    onSubmit: username => state => values => {
      const createValues = values.merge(state)
      dispatch(publishRequest({ username, values: createValues }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(immutPropsToJS(PublishForm))

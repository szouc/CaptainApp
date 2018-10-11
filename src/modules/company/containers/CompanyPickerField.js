import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchRequest } from '../actions'
import { CompanyPickerField } from '../components'
import { companyPickerSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const companies = companyPickerSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    companies
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCompanies: username => {
      dispatch(fetchRequest(username))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(immutPropsToJS(CompanyPickerField))

import { connect } from 'react-redux'
import immutPropsToJS from '../../../utils/immutPropsToJS'
import { fetchRequest } from '../actions'
import { ProductPickerField } from '../components'
import { productPickerSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const products = productPickerSelector(state)
  return {
    username: state.getIn(['auth', 'username']),
    products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: username => {
      dispatch(fetchRequest(username))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(immutPropsToJS(ProductPickerField))

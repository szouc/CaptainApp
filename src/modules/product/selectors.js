import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'

const ids = state => state.getIn(['product', 'ids'])
const entities = state => state.getIn(['entities', 'products'])

const productArraySelector = createImmutableSelector(
  [entities, ids],
  (entities, ids) => {
    return !ids.isEmpty() ? ids.map(item => entities.get(item)) : ids
  }
)

const productPickerSelector = createImmutableSelector(
  [productArraySelector],
  products => {
    return !products.isEmpty()
      ? products.map(item =>
        fromJS({
          label: `${item.get('name')}_${item.get('specs')}`,
          value: item.get('_id')
        })
      )
      : products
  }
)

export { productArraySelector, productPickerSelector }

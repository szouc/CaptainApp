import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'

const ids = state => state.getIn(['company', 'ids'])
const entities = state => state.getIn(['entities', 'companies'])

const companyArraySelector = createImmutableSelector(
  [entities, ids],
  (entities, ids) => {
    return !ids.isEmpty() ? ids.map(item => entities.get(item)) : ids
  }
)

const companyPickerSelector = createImmutableSelector(
  [companyArraySelector],
  vehicles => {
    return !vehicles.isEmpty()
      ? vehicles.map(item =>
        fromJS({
          label: `${item.get('name')}_${item.get('addr')}`,
          value: item.get('_id')
        })
      )
      : vehicles
  }
)

export { companyArraySelector, companyPickerSelector }

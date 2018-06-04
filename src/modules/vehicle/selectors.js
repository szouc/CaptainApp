import createImmutableSelector from '../../utils/createImmutableSelector'
import { fromJS } from 'immutable'

const ids = state => state.getIn(['vehicle', 'ids'])
const entities = state => state.getIn(['entities', 'vehicles'])

const vehicleArraySelector = createImmutableSelector(
  [entities, ids],
  (entities, ids) => {
    return !ids.isEmpty() ? ids.map(item => entities.get(item)) : ids
  }
)

const vehiclePickerSelector = createImmutableSelector(
  [vehicleArraySelector],
  vehicles => {
    return !vehicles.isEmpty()
      ? vehicles.map(item =>
        fromJS({
          label: item.get('plate'),
          value: item.get('_id')
        })
      )
      : vehicles
  }
)

export { vehicleArraySelector, vehiclePickerSelector }

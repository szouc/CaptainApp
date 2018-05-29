import createImmutableSelector from '../../utils/createImmutableSelector'

const transportEntity = state => state.getIn(['entities', 'transports'])
const assignIds = state => state.getIn(['transport', 'assignIds'])
const acceptIds = state => state.getIn(['transport', 'acceptIds'])
const submitIds = state => state.getIn(['transport', 'submitIds'])
const refuseIds = state => state.getIn(['transport', 'refuseIds'])
const currentTransport = state => state.getIn(['transport', 'currentTransport'])

const transportCurrentSelector = createImmutableSelector(
  [transportEntity, currentTransport],
  (transports, current) => {
    return current && transports.get(current)
  }
)

const assignArraySelector = createImmutableSelector(
  [transportEntity, assignIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const assignCountSelector = createImmutableSelector([assignIds], transports =>
  transports.count()
)

const acceptArraySelector = createImmutableSelector(
  [transportEntity, acceptIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const acceptCountSelector = createImmutableSelector([acceptIds], transports =>
  transports.count()
)

const submitArraySelector = createImmutableSelector(
  [transportEntity, submitIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const submitCountSelector = createImmutableSelector([submitIds], transports =>
  transports.count()
)

const refuseArraySelector = createImmutableSelector(
  [transportEntity, refuseIds],
  (transports, ids) => {
    return !ids.isEmpty() ? ids.map(item => transports.get(item)) : ids
  }
)

const refuseCountSelector = createImmutableSelector([refuseIds], transports =>
  transports.count()
)

export {
  transportCurrentSelector,
  assignArraySelector,
  assignCountSelector,
  acceptArraySelector,
  acceptCountSelector,
  submitArraySelector,
  submitCountSelector,
  refuseArraySelector,
  refuseCountSelector
}

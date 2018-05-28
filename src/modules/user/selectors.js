import createImmutableSelector from '../../utils/createImmutableSelector'

const profile = state => state.getIn(['user', 'profile'])

const profileSelector = createImmutableSelector([profile], profile => profile)

export { profileSelector }

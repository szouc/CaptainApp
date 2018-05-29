import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  screenLoading: false,
  formLoading: false,
  currentTransport: undefined,
  assignIds: [],
  acceptIds: [],
  refuseIds: [],
  submitIds: []
})

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.FETCH_SUCCESS:
      return state.set('transportIds', payload)
    case Type.FETCH_ASSIGN_SUCCESS:
      return state.set('assignIds', payload)
    case Type.FETCH_ACCEPT_SUCCESS:
      return state.set('acceptIds', payload)
    case Type.FETCH_SUBMIT_SUCCESS:
      return state.set('submitIds', payload)
    case Type.FETCH_REFUSE_SUCCESS:
      return state.set('refuseIds', payload)
    case Type.PUBLISH_SUCCESS:
      return state.set('currentTransport', payload)
    case Type.DENY_SUCCESS:
      const denyPosition = state.get('submitIds').indexOf(payload)
      return state.deleteIn(['submitIds', denyPosition])
    case Type.PASS_SUCCESS:
      const passPosition = state.get('submitIds').indexOf(payload)
      return state.deleteIn(['submitIds', passPosition])
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default reducer

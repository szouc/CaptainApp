import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  pickerLoading: false,
  ids: []
})

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.FETCH_SUCCESS:
      return state.set('ids', payload)
    default:
      return state
  }
}

export default reducer

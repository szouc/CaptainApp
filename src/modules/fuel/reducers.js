import * as Type from './actionTypes'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  screenLoading: false,
  formLoading: false,
  currentVehicle: undefined,
  fuelIds: [],
  vehicleIds: []
})

const fuelReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Type.FETCH_VEHICLE_SUCCESS:
      return state
        .set('vehicleIds', payload)
        .set('currentVehicle', payload.get(0))
    case Type.SET_VEHICLE_SUCCESS:
      return state.set('currentVehicle', payload)
    case Type.FETCH_SUCCESS:
      return state.set('fuelIds', payload)
    case Type.ADD_SUCCESS:
      return state.set('currentVehicle', payload)
    case Type.SET_LOADING:
      return state.set(`${payload.scope}Loading`, payload.loading)
    default:
      return state
  }
}

export default fuelReducer

import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'VEHICLE'
const addFuelPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addFuelPrefix('SET_LOADING')
export const FETCH_REQUEST = addFuelPrefix('FETCH_REQUEST')
export const FETCH_SUCCESS = addFuelPrefix('FETCH_SUCCESS')

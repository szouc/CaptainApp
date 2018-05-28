import addPrefix from '../../utils/addPrefix'

export const MODULE_NAME = 'TRANSPORT'
const addTransportPrefix = addPrefix(MODULE_NAME)

export const SET_LOADING = addTransportPrefix('SET_LOADING')
export const INITIAL_REQUEST = addTransportPrefix('INITIAL_REQUEST')
export const INITIAL_SUCCESS = addTransportPrefix('INITIAL_SUCCESS')
export const FETCH_REQUEST = addTransportPrefix('FETCH_REQUEST')
export const FETCH_SUCCESS = addTransportPrefix('FETCH_SUCCESS')
export const FETCH_ASSIGN_REQUEST = addTransportPrefix('FETCH_ASSIGN_REQUEST')
export const FETCH_ASSIGN_SUCCESS = addTransportPrefix('FETCH_ASSIGN_SUCCESS')
export const FETCH_ACCEPT_REQUEST = addTransportPrefix('FETCH_ACCEPT_REQUEST')
export const FETCH_ACCEPT_SUCCESS = addTransportPrefix('FETCH_ACCEPT_SUCCESS')
export const FETCH_CHECK_REQUEST = addTransportPrefix('FETCH_CHECK_REQUEST')
export const FETCH_CHECK_SUCCESS = addTransportPrefix('FETCH_CHECK_SUCCESS')
export const TO_ACCEPT_REQUEST = addTransportPrefix('TO_ACCEPT_REQUEST')
export const TO_ACCEPT_SUCCESS = addTransportPrefix('TO_ACCEPT_SUCCESS')
export const TO_ACTIVE_REQUEST = addTransportPrefix('TO_ACTIVE_REQUEST')
export const TO_ACTIVE_SUCCESS = addTransportPrefix('TO_ACTIVE_SUCCESS')
export const TO_CHECK_REQUEST = addTransportPrefix('TO_CHECK_REQUEST')
export const TO_CHECK_SUCCESS = addTransportPrefix('TO_CHECK_SUCCESS')
export const TO_LIST_REQUEST = addTransportPrefix('TO_LIST_REQUEST')
export const TO_LIST_SUCCESS = addTransportPrefix('TO_LIST_SUCCESS')
export const ACCEPT_REQUEST = addTransportPrefix('ACCEPT_REQUEST')
export const ACCEPT_SUCCESS = addTransportPrefix('ACCEPT_SUCCESS')
export const TO_SUBMIT_REQUEST = addTransportPrefix('TO_SUBMIT_REQUEST')
export const TO_SUBMIT_SUCCESS = addTransportPrefix('TO_SUBMIT_SUCCESS')
export const SAVE_REQUEST = addTransportPrefix('SAVE_REQUEST')
export const SAVE_SUCCESS = addTransportPrefix('SAVE_SUCCESS')
export const SUBMIT_REQUEST = addTransportPrefix('SUBMIT_REQUEST')
export const SUBMIT_SUCCESS = addTransportPrefix('SUBMIT_SUCCESS')
export const DELETE_REQUEST = addTransportPrefix('DELETE_REQUEST')
export const DELETE_SUCCESS = addTransportPrefix('DELETE_SUCCESS')
export const BACK_ACTIVE_REQUEST = addTransportPrefix('BACK_ACTIVE_REQUEST')
export const BACK_ACTIVE_SUCCESS = addTransportPrefix('BACK_ACTIVE_SUCCESS')
export const BACK_REQUEST = addTransportPrefix('BACK_REQUEST')
export const BACK_SUCCESS = addTransportPrefix('BACK_SUCCESS')
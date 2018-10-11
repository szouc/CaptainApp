import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { ADD_VEHICLE_ENTITY } from '../entity'
import { fromJS } from 'immutable'

import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function * fetchFlow(action) {
  const { payload } = action
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: 'picker', loading: true }
  })
  yield call(delay, 200)
  try {
    const vehicles = yield call(Api.getVehicles, payload)
    if (vehicles) {
      yield put({
        type: ADD_VEHICLE_ENTITY,
        payload: vehicles.get('entities')
      })
      yield put({
        type: Type.FETCH_SUCCESS,
        payload: vehicles.get('result')
      })
    }
  } catch (error) {
    yield put({
      type: REQUEST_ERROR,
      payload: fromJS({ errorScope: 'Vehicle', message: error.message })
    })
  } finally {
    yield put({
      type: Type.SET_LOADING,
      payload: { scope: 'picker', loading: false }
    })
  }
}

export default function * rootSagas() {
  yield takeLatest(Type.FETCH_REQUEST, fetchFlow)
}

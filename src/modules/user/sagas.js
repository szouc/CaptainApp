import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { fromJS } from 'immutable'

import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Machine from '../../utils/machine'

const userState = {
  currentState: 'user_screen',
  states: {
    user_screen: {
      fetch: 'loading'
    },
    loading: {
      success: 'user_screen',
      failure: 'error'
    },
    error: {
      fetch_retry: 'user_screen'
    }
  }
}

function * screenEffect(scope, action, data = {}, pagination = {}) {
  switch (action) {
    case 'fetch':
      yield put({
        type: Type.FETCH_PROFILE_SUCCESS,
        payload: data
      })
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
      break
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * loadingEffect(scope) {
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: true }
  })
}

function * errorEffect(scope, error) {
  yield put({
    type: REQUEST_ERROR,
    payload: fromJS({ errorScope: 'user', message: error.message })
  })
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

const userEffects = {
  loading: loadingEffect,
  error: errorEffect,
  user_screen: screenEffect
}

const machine = Machine(userState, userEffects)
const fetchEffect = machine.getEffect('fetch')
const successEffect = machine.getEffect('success')
const failureEffect = machine.getEffect('failure')

function * fetchProfileFlow(action) {
  const { payload } = action
  yield fetchEffect('screen')
  yield call(delay, 200)
  try {
    const profile = yield call(Api.getProfileByUsername, payload)
    if (profile) {
      yield successEffect('screen', 'fetch', profile)
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('fetch_retry')
  }
}

export default function * rootSagas() {
  yield takeLatest(Type.FETCH_PROFILE_REQUEST, fetchProfileFlow)
}

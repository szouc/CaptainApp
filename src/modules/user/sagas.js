import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { LOGOUT_REQUEST } from '../auth/actionTypes'
import { fromJS } from 'immutable'
import { NavigationActions } from 'react-navigation'
import { Toast } from 'antd-mobile'

import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Machine from '../../utils/machine'

const userState = {
  currentState: 'user_screen',
  states: {
    user_screen: {
      fetch: 'loading',
      to_change: 'loading'
    },
    change_screen: {
      change: 'loading',
      back: 'loading'
    },
    loading: {
      to_change_success: 'change_screen',
      // response 'fetch', 'back', 'change'
      success: 'user_screen',
      failure: 'error'
    },
    error: {
      fetch_retry: 'user_screen',
      change_retry: 'change_screen'
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
    case 'back':
      yield put(NavigationActions.back())
      break
    case 'change':
      yield put(NavigationActions.back())
      yield put({
        type: LOGOUT_REQUEST
      })
      Toast.success('修改成功，请重新登陆！', 2)
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

function * changeScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'ChangePassword' }))
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
  user_screen: screenEffect,
  change_screen: changeScreenEffect
}

const machine = Machine(userState, userEffects)
const fetchEffect = machine.getEffect('fetch')
const toChangeEffect = machine.getEffect('to_change')
const toChangeSuccessEffect = machine.getEffect('to_change_success')
const changeEffect = machine.getEffect('change')
const backEffect = machine.getEffect('back')
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

function * toChangeScreenFlow() {
  yield toChangeEffect('screen')
  yield call(delay, 200)
  try {
    yield toChangeSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('fetch_retry')
  }
}

function * changePasswordFlow(action) {
  const { payload } = action
  yield changeEffect('form')
  yield call(delay, 200)
  try {
    const driver = yield call(Api.changePasswordByUsername, payload)
    if (driver) {
      yield successEffect('form', 'change', payload)
    }
  } catch (error) {
    yield failureEffect('form', error)
    machine.operation('change_retry')
  }
}

function * backFlow() {
  yield backEffect('screen')
  yield call(delay, 200)
  try {
    yield successEffect('screen', 'back')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('change_retry')
  }
}

export default function * rootSagas() {
  yield takeLatest(Type.FETCH_PROFILE_REQUEST, fetchProfileFlow)
  yield takeLatest(Type.TO_CHANGE_REQUEST, toChangeScreenFlow)
  yield takeLatest(Type.CHANGE_PASSWORD_REQUEST, changePasswordFlow)
  yield takeLatest(Type.BACK_REQUEST, backFlow)
}

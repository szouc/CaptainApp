import * as Api from './api'
import * as Type from './actionTypes'
import { REQUEST_ERROR } from '../error'
import { ADD_TRANSPORT_ENTITY } from '../entity'
import { fromJS } from 'immutable'
import { NavigationActions } from 'react-navigation'
// import { resetSection } from 'redux-form'
import { Toast } from 'antd-mobile'
import { reset } from 'redux-form'

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Machine from '../../utils/machine'

const transportState = {
  currentState: 'main_screen',
  states: {
    main_screen: {
      initial: 'loading',
      to_submit: 'loading',
      to_assign: 'loading',
      to_publish: 'loading',
      to_accept: 'loading',
      to_refuse: 'loading'
    },
    loading: {
      // response 'initial', 'back'
      initial_success: 'main_screen',
      // response 'to_accept'
      accept_success: 'accept_screen',
      // response 'to_publish', 'publish'
      publish_success: 'publish_screen',
      // response 'to_assign'
      assign_success: 'assign_screen',
      // response 'to_submit', 'pass', 'deny'
      submit_success: 'submit_screen',
      // response 'to_refuse'
      refuse_success: 'refuse_screen',
      failure: 'error'
    },
    accept_screen: {
      back: 'loading'
    },
    assign_screen: {
      back: 'loading'
    },
    publish_screen: {
      publish: 'loading',
      back: 'loading'
    },
    submit_screen: {
      pass: 'loading',
      deny: 'loading',
      back: 'loading'
    },
    refuse_screen: {
      back: 'loading'
    },
    error: {
      main_retry: 'main_screen',
      accept_retry: 'accept_screen',
      publish_retry: 'publish_screen',
      assign_retry: 'assign_screen',
      submit_retry: 'submit_screen',
      refuse_retry: 'refuse_screen'
    }
  }
}

function * mainScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.assign.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.accept.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.refuse.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.submit.get('entities')
      })
      yield put({
        type: Type.FETCH_ASSIGN_SUCCESS,
        payload: data.assign.get('result')
      })
      yield put({
        type: Type.FETCH_ACCEPT_SUCCESS,
        payload: data.accept.get('result')
      })
      yield put({
        type: Type.FETCH_REFUSE_SUCCESS,
        payload: data.refuse.get('result')
      })
      yield put({
        type: Type.FETCH_SUBMIT_SUCCESS,
        payload: data.submit.get('result')
      })
      break
    case 'back':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.assign.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.accept.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.refuse.get('entities')
      })
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.submit.get('entities')
      })
      yield put({
        type: Type.FETCH_ASSIGN_SUCCESS,
        payload: data.assign.get('result')
      })
      yield put({
        type: Type.FETCH_ACCEPT_SUCCESS,
        payload: data.accept.get('result')
      })
      yield put({
        type: Type.FETCH_REFUSE_SUCCESS,
        payload: data.refuse.get('result')
      })
      yield put({
        type: Type.FETCH_SUBMIT_SUCCESS,
        payload: data.submit.get('result')
      })
      yield put(NavigationActions.back())
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * assignScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransAssign' }))
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * acceptScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransAccept' }))
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * refuseScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransRefuse' }))
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * publishScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransPublish' }))
      break
    case 'publish':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.PUBLISH_SUCCESS,
        payload: data.get('result')
      })
      yield put(reset('TransportCreateForm'))
      Toast.success('发布成功！', 2)
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
  }
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

function * submitScreenEffect(scope, action, data = '', pagination = {}) {
  switch (action) {
    case 'initial':
      yield put(NavigationActions.navigate({ routeName: 'TransSubmit' }))
      break
    case 'deny':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.DENY_SUCCESS,
        payload: data.get('result')
      })
      Toast.success('拒绝成功！', 2)
      break
    case 'pass':
      yield put({
        type: ADD_TRANSPORT_ENTITY,
        payload: data.get('entities')
      })
      yield put({
        type: Type.PASS_SUCCESS,
        payload: data.get('result')
      })
      Toast.success('通过成功！', 2)
      break
    default:
      yield put({
        type: REQUEST_ERROR,
        payload: fromJS({ message: '没有相应的操作。' })
      })
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
    payload: fromJS({ errorScope: 'Transport', message: error.message })
  })
  yield put({
    type: Type.SET_LOADING,
    payload: { scope: scope, loading: false }
  })
}

const transportEffects = {
  loading: loadingEffect,
  error: errorEffect,
  main_screen: mainScreenEffect,
  publish_screen: publishScreenEffect,
  accept_screen: acceptScreenEffect,
  assign_screen: assignScreenEffect,
  submit_screen: submitScreenEffect,
  refuse_screen: refuseScreenEffect
}

const machine = new Machine(transportState, transportEffects)
const initialEffect = machine.getEffect('initial')
const toAcceptScreenEffect = machine.getEffect('to_accept')
const toAssignScreenEffect = machine.getEffect('to_assign')
const toSubmitScreenEffect = machine.getEffect('to_submit')
const toRefuseScreenEffect = machine.getEffect('to_refuse')
const toPublishScreenEffect = machine.getEffect('to_publish')
const initialSuccessEffect = machine.getEffect('initial_success')
const acceptSuccessEffect = machine.getEffect('accept_success')
const assignSuccessEffect = machine.getEffect('assign_success')
const submitSuccessEffect = machine.getEffect('submit_success')
const refuseSuccessEffect = machine.getEffect('refuse_success')
const publishSuccessEffect = machine.getEffect('publish_success')
const publishEffect = machine.getEffect('publish')
const denyEffect = machine.getEffect('deny')
const passEffect = machine.getEffect('pass')
const backEffect = machine.getEffect('back')
const failureEffect = machine.getEffect('failure')

function * initialFlow(action) {
  const { payload } = action
  yield initialEffect('screen')
  yield call(delay, 200)
  try {
    const [assign, accept, submit, refuse] = yield all([
      call(Api.getAssignTransports, payload),
      call(Api.getAcceptTransports, payload),
      call(Api.getSubmitTransports, payload),
      call(Api.getRefuseTransports, payload)
    ])
    if (assign && accept && submit && refuse) {
      yield initialSuccessEffect('screen', 'initial', {
        assign,
        accept,
        submit,
        refuse
      })
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toAcceptScreenFlow() {
  yield toAcceptScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield acceptSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toAssignScreenFlow() {
  yield toAssignScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield assignSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toSubmitScreenFlow() {
  yield toSubmitScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield submitSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toRefuseScreenFlow() {
  yield toRefuseScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield refuseSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * toPublishScreenFlow() {
  yield toPublishScreenEffect('screen')
  yield call(delay, 200)
  try {
    yield publishSuccessEffect('screen', 'initial')
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

function * publishFlow(action) {
  const { payload } = action
  yield publishEffect('form')
  yield call(delay, 200)
  try {
    const transport = yield call(Api.createTransport, payload)
    if (transport) {
      yield publishSuccessEffect('form', 'publish', transport)
    }
  } catch (error) {
    yield failureEffect('form', error)
    machine.operation('publish_retry')
  }
}

function * passFlow(action) {
  const { payload } = action
  yield passEffect('screen')
  yield call(delay, 200)
  try {
    const transport = yield call(Api.passTransport, payload)
    if (transport) {
      yield submitSuccessEffect('screen', 'pass', transport)
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('submit_retry')
  }
}

function * denyFlow(action) {
  const { payload } = action
  yield denyEffect('screen')
  yield call(delay, 200)
  try {
    const transport = yield call(Api.denyTransport, payload)
    if (transport) {
      yield submitSuccessEffect('screen', 'deny', transport)
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('submit_retry')
  }
}

// function * deleteFuelFlow() {
//   while (true) {
//     const { payload } = yield take(Type.DELETE_REQUEST)
//     yield deleteFuelEffect('screen')
//     try {
//       const vehicle = yield call(Api.deleteVehicleFuel, payload)
//       if (vehicle) {
//         yield deleteSuccessEffect('screen', 'delete', vehicle)
//       }
//     } catch (error) {
//       yield failureEffect('screen', error)
//       machine.operation('fetch_retry')
//     }
//   }
// }

function * backFlow(action) {
  const { payload } = action
  yield backEffect('screen')
  yield call(delay, 200)
  try {
    const [assign, accept, submit, refuse] = yield all([
      call(Api.getAssignTransports, payload),
      call(Api.getAcceptTransports, payload),
      call(Api.getSubmitTransports, payload),
      call(Api.getRefuseTransports, payload)
    ])
    if (assign && accept && submit && refuse) {
      yield initialSuccessEffect('screen', 'back', {
        assign,
        accept,
        submit,
        refuse
      })
    }
  } catch (error) {
    yield failureEffect('screen', error)
    machine.operation('main_retry')
  }
}

export default function * rootSagas() {
  yield takeLatest(Type.INITIAL_REQUEST, initialFlow)
  yield takeLatest(Type.TO_ACCEPT_REQUEST, toAcceptScreenFlow)
  yield takeLatest(Type.TO_ASSIGN_REQUEST, toAssignScreenFlow)
  yield takeLatest(Type.TO_SUBMIT_REQUEST, toSubmitScreenFlow)
  yield takeLatest(Type.TO_PUBLISH_REQUEST, toPublishScreenFlow)
  yield takeLatest(Type.TO_REFUSE_REQUEST, toRefuseScreenFlow)
  yield takeLatest(Type.PUBLISH_REQUEST, publishFlow)
  yield takeLatest(Type.PASS_REQUEST, passFlow)
  yield takeLatest(Type.DENY_REQUEST, denyFlow)
  yield takeLatest(Type.BACK_REQUEST, backFlow)
}

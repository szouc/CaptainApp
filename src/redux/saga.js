import { fork } from 'redux-saga/effects'
import { saga as authSaga } from '../modules/auth'
import { saga as userSaga } from '../modules/user'
import { saga as fuelSaga } from '../modules/fuel'
import { saga as maintainSaga } from '../modules/maintain'
import { saga as transportSaga } from '../modules/transport'
import { saga as companySaga } from '../modules/company'
import { saga as productSaga } from '../modules/product'
import { saga as vehicleSaga } from '../modules/vehicle'

export default function * rootSagas() {
  yield fork(authSaga)
  yield fork(userSaga)
  yield fork(fuelSaga)
  yield fork(maintainSaga)
  yield fork(transportSaga)
  yield fork(companySaga)
  yield fork(productSaga)
  yield fork(vehicleSaga)
}

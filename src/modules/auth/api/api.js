import { setLocalLoggedIn, removeLocalLoggedIn } from './localStorage'
import * as Request from './request'

const TRUE = true
const STATUS_OK = 200

async function login(payload) {
  const response = await Request.loginRequest(payload)
  if (response.status === STATUS_OK) {
    await setLocalLoggedIn(response.data)
    return response.data
  }
  throw new Error('Something wrong at login Process.')
}

async function logout() {
  const response = await Request.logoutRequest()
  if (response.status === STATUS_OK) {
    await removeLocalLoggedIn()
    return TRUE
  }
  throw new Error('Something wrong at logout Process.')
}

export { login, logout }

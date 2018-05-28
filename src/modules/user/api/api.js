import * as Request from './request'
import { fromJS } from 'immutable'
import { userNormalize } from '../../../settings/schema'

async function getProfileByUsername(username) {
  const response = await Request.getProfileByUsername(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    // const driver = userNormalize(data)
    return fromJS(data)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something Wrong.(getProfileByUsername)')
}

async function changePasswordByUsername(values) {
  const username = values.get('username')
  const password = values.get('password')
  const response = await Request.changePasswordByUsername(username, password)
  if (response.data.ok) {
    const data = response.data.result || {}
    const driver = userNormalize(data)
    return fromJS(driver)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something Wrong.(changePasswordByUsername)')
}
export { getProfileByUsername, changePasswordByUsername }

import * as Request from './request'
import { vehicleArrayNormalize } from '../../../settings/schema'
import { fromJS } from 'immutable'

async function getVehicles(username) {
  const response = await Request.getVehicles(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const vehicles = vehicleArrayNormalize(data)
    return fromJS(vehicles)
  }
  if (!response.data.ok) {
    const data = {}
    const vehicles = vehicleArrayNormalize(data)
    return fromJS(vehicles)
  }
  throw new Error('Something wrong.(getVehicles)')
}

export { getVehicles }

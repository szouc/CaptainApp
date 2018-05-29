import * as Request from './request'
import {
  transportArrayNormalize,
  transportNormalize
} from '../../../settings/schema'
import { fromJS } from 'immutable'

async function createTransport(username, values) {
  const response = await Request.createTransport(username, values)
  if (response.data.ok) {
    const data = response.data.result
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(createTransport)')
}

async function getTransports(username) {
  const response = await Request.getTransports(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  if (!response.data.ok) {
    const data = {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getDriverTransports)')
}

async function getAcceptTransports(username) {
  const response = await Request.getAcceptTransports(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  if (!response.data.ok) {
    const data = {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getAcceptTransports)')
}

async function getAssignTransports(username) {
  const response = await Request.getAssignTransports(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  if (!response.data.ok) {
    const data = {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getAssignTransports)')
}

async function getSubmitTransports(username) {
  const response = await Request.getSubmitTransports(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  if (!response.data.ok) {
    const data = {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getCheckTransports)')
}

async function getRefuseTransports(username) {
  const response = await Request.getRefuseTransports(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  if (!response.data.ok) {
    const data = {}
    const transports = transportArrayNormalize(data)
    return fromJS(transports)
  }
  throw new Error('Something wrong.(getCheckTransports)')
}

async function passTransport({ username, transportId }) {
  const response = await Request.passTransport(username, transportId)
  if (response.data.ok) {
    const data = response.data.result[0] || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(acceptTransport)')
}

async function denyTransport({ username, transportId }) {
  const response = await Request.denyTransport(username, transportId)
  if (response.data.ok) {
    const data = response.data.result[0] || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(submitTransport)')
}

async function updateTransport({ username, transportId, update }) {
  const response = await Request.updateTransport(username, transportId, update)
  if (response.data.ok) {
    const data = response.data.result || {}
    const transport = transportNormalize(data)
    return fromJS(transport)
  }
  if (!response.data.ok) {
    throw new Error(response.data.error)
  }
  throw new Error('Something wrong.(updateTransport)')
}

export {
  createTransport,
  getTransports,
  getAssignTransports,
  getAcceptTransports,
  getSubmitTransports,
  getRefuseTransports,
  passTransport,
  denyTransport,
  updateTransport
}

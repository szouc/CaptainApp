import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
import replaceAll from '../../../utils/replaceAll'

const getTransports = username => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

const getAssignTransports = username => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captainStatus: 'assign' }
  }
  return axios(config)
}

const getAcceptTransports = username => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captainStatus: 'accept' }
  }
  return axios(config)
}

const getCheckTransports = username => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captainStatus: 'submit' }
  }
  return axios(config)
}

const acceptTransport = (username, transportId) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.CAPTAIN_TRANSPORT_ID_STATUS, mapObj),
    method: 'put',
    data: { status: 'accept' }
  }
  return axios(config)
}

const submitTransport = (username, transportId) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.CAPTAIN_TRANSPORT_ID_STATUS, mapObj),
    method: 'put',
    data: { status: 'submit' }
  }
  return axios(config)
}

const passTransport = (username, transportId) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.CAPTAIN_TRANSPORT_ID, mapObj),
    method: 'put',
    data: { status: 'pass' }
  }
  return axios(config)
}

const denyTransport = (username, transportId) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.CAPTAIN_TRANSPORT_ID, mapObj),
    method: 'put',
    data: { status: 'deny' }
  }
  return axios(config)
}

const updateTransport = (username, transportId, update) => {
  const mapObj = {
    ':username': username,
    ':childId': transportId
  }
  const config = {
    url: replaceAll(URL.CAPTAIN_TRANSPORT_ID, mapObj),
    method: 'put',
    data: update
  }
  return axios(config)
}

export {
  getTransports,
  getAssignTransports,
  getAcceptTransports,
  getCheckTransports,
  acceptTransport,
  submitTransport,
  passTransport,
  denyTransport,
  updateTransport
}

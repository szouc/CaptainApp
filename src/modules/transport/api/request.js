import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
import replaceAll from '../../../utils/replaceAll'

const createTransport = (username, values) => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'post',
    data: values
  }
  return axios(config)
}

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

const getSubmitTransports = username => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captainStatus: 'submit' }
  }
  return axios(config)
}

const getRefuseTransports = username => {
  const config = {
    url: URL.CAPTAIN_TRANSPORT.replace(/:username/, username),
    method: 'get',
    params: { captainStatus: 'deny' }
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

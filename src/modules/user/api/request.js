import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'

const getProfileByUsername = username => {
  const config = {
    url: URL.CAPTAIN_ID.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

const changePasswordByUsername = (username, data) => {
  const config = {
    url: URL.CAPTAIN_ID.replace(/:username/, username),
    method: 'put',
    data: data
  }
  return axios(config)
}

export { getProfileByUsername, changePasswordByUsername }

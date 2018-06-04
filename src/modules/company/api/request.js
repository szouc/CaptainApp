import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
// import replaceAll from '../../../utils/replaceAll'

const getCompanies = username => {
  const config = {
    url: URL.CAPTAIN_COMPANY.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

export { getCompanies }

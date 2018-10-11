import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
// import replaceAll from '../../../utils/replaceAll'

const getVehicles = username => {
  const config = {
    url: URL.CAPTAIN_VEHICLE.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

export { getVehicles }

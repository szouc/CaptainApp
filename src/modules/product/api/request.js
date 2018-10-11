import * as URL from '../../../settings/routes'
import axios from '../../../settings/axiosInstance'
// import replaceAll from '../../../utils/replaceAll'

const getProducts = username => {
  const config = {
    url: URL.CAPTAIN_PRODUCT.replace(/:username/, username),
    method: 'get'
  }
  return axios(config)
}

export { getProducts }

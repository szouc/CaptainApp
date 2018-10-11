import * as Request from './request'
import { productArrayNormalize } from '../../../settings/schema'
import { fromJS } from 'immutable'

async function getProducts(username) {
  const response = await Request.getProducts(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const products = productArrayNormalize(data)
    return fromJS(products)
  }
  if (!response.data.ok) {
    const data = {}
    const products = productArrayNormalize(data)
    return fromJS(products)
  }
  throw new Error('Something wrong.(getProducts)')
}

export { getProducts }

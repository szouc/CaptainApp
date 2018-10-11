import * as Request from './request'
import { companyArrayNormalize } from '../../../settings/schema'
import { fromJS } from 'immutable'

async function getCompanies(username) {
  const response = await Request.getCompanies(username)
  if (response.data.ok) {
    const data = response.data.result || {}
    const companies = companyArrayNormalize(data)
    return fromJS(companies)
  }
  if (!response.data.ok) {
    const data = {}
    const companies = companyArrayNormalize(data)
    return fromJS(companies)
  }
  throw new Error('Something wrong.(getCompanies)')
}

export { getCompanies }

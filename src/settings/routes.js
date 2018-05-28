/**
 * Auth Module Api Route
 */
export const LOGIN = '/auth/login'
export const LOGOUT = '/auth/logout'
export const RESET_PASSWORD = '/:username/reset_password'

/**
 * Driver Module Api Route
 */
export const CAPTAIN_ROOT = '/api/captain'
export const CAPTAIN_ID = '/api/captain/:username'
export const CAPTAIN_VEHICLE = '/api/captain/:username/vehicle'
export const CAPTAIN_FUEL = '/api/captain/:username/fuel'
export const CAPTAIN_FUEL_ID = '/api/captain/:username/fuel/:childId'
export const CAPTAIN_MAINTAIN = '/api/captain/:username/maintenance'
export const CAPTAIN_MAINTAIN_ID = '/api/captain/:username/maintenance/:childId'
export const CAPTAIN_TRANSPORT = '/api/captain/:username/transport'
export const CAPTAIN_TRANSPORT_ID = '/api/captain/:username/transport/:childId'

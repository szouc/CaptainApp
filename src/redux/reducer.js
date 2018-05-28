import { combineReducers } from 'redux-immutable'
import { reducer as formReducer } from 'redux-form/immutable'
import { reducer as navReducer } from '../nav'
import { reducer as entityReducer } from '../modules/entity'
import { reducer as authReducer } from '../modules/auth'
import { reducer as errorReducer } from '../modules/error'
import { reducer as userReducer } from '../modules/user'
import { reducer as fuelReducer } from '../modules/fuel'
import { reducer as maintainReducer } from '../modules/maintain'
import { reducer as transportReducer } from '../modules/transport'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  entities: entityReducer,
  nav: navReducer,
  user: userReducer,
  fuel: fuelReducer,
  maintain: maintainReducer,
  transport: transportReducer
})

export default rootReducer

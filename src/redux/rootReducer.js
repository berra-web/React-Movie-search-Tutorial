import { combineReducers } from 'redux'

import filmReducer from './film/filmReducer'

const rootReducer = combineReducers({
  filmStore: filmReducer
})

export default rootReducer

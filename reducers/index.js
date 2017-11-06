import { combineReducers } from 'redux'

import hidden from './hidden'
import todos from './todos'

export default combineReducers({
    hidden,
    todos,
})
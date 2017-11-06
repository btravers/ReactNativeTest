import { TOGGLE_HIDE_COMPLETED } from '../constants/ActionTypes'

export default (state = false, action) => {
    switch (action.type) {
        case TOGGLE_HIDE_COMPLETED: {
            return !state
        }
        default: {
            return state
        }
    }
}
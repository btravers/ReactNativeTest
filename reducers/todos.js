import { ADD_TODO, CLEAR_COMPLETED, TOGGLE_COMPLETE_TODO } from '../constants/ActionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    key: state.reduce((acc, todo) => Math.max(todo.key, acc), -1) + 1,
                    completed: false,
                    text: action.text,
                },
            ]
        }
        case CLEAR_COMPLETED: {
            return state.filter(({ completed }) => !completed)
        }
        case TOGGLE_COMPLETE_TODO: {
            return state.map(todo => todo.key === action.key 
                ? { ...todo, completed: !todo.completed } 
                : todo)
        }
        default: {
            return state
        }
    }
}
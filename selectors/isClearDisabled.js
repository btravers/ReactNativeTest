import { createSelector } from 'reselect'

import todos from './todos'

export default createSelector(
    todos,
    todos => todos.reduce((acc, todo) => acc && !todo.completed, true)
)
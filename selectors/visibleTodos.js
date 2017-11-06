import { createSelector } from 'reselect'

import todos from './todos'
import hidden from './hidden'

export default createSelector(
    todos, hidden,
    (todos, hidden) => hidden 
        ? todos.filter(({ completed }) => !completed) 
        : todos
)
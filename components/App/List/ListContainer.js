import { connect } from 'react-redux'

import visibleTodos from '../../../selectors/visibleTodos'
import toggleCompleteTodo from '../../../actions/toggleCompleteTodo'
import List from './List'

const mapStateToProps = state => ({
    todos: visibleTodos(state),
}) 

export default connect(mapStateToProps, { toggleCompleteTodo })(List)
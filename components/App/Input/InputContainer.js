import { connect } from 'react-redux'

import Input from './Input'
import addTodo from '../../../actions/addTodo'

export default connect(null, { addTodo })(Input)
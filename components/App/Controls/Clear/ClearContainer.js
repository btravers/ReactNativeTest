import { connect } from 'react-redux'

import clearCompleted from '../../../../actions/clearCompleted'
import isClearDisabled from '../../../../selectors/isClearDisabled'
import Clear from './Clear'

const mapStateToProps = state => ({
    disabled: isClearDisabled(state),
})

export default connect(mapStateToProps, { clearCompleted })(Clear)
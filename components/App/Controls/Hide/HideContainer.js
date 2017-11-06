import { connect } from 'react-redux'

import toggleHideCompleted from '../../../../actions/toggleHideCompleted'
import hidden from '../../../../selectors/hidden'
import Hide from './Hide'

const mapStateToProps = state => ({
    hidden: hidden(state),
})

export default connect(mapStateToProps, { toggleHideCompleted })(Hide)
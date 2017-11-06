import React from 'react'

import Button from '../../../Button'

export default ({ hidden, toggleHideCompleted }) => (
    <Button
        title={hidden ? 'Show' : 'Hide'}
        onPress={toggleHideCompleted}
        color='#1DE9B6'
    />
)
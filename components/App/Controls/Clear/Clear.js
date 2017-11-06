import React from 'react'

import Button from '../../../Button'

export default ({ disabled, clearCompleted }) => (
    <Button
        title='Clear'
        onPress={clearCompleted}
        disabled={disabled}
        color='#FF1744'
    />
)
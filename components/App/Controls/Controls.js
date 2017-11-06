import React from 'react'
import { View } from 'react-native'

import Clear from './Clear'
import Hide from './Hide'
import styles from './styles'

export default () => (
    <View style={styles.container}>
        <Clear />
        <Hide />
   </View>
)
import React, { PureComponent } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import styles from './styles'

export default class Button extends PureComponent {
	render() {
		const { title, disabled, onPress, color } = this.props
		return (
			<TouchableHighlight
				style={styles.container}
			 	disabled={disabled}
				onPress={onPress}
				underlayColor='white'
			>
				<View style={[styles.inner, { backgroundColor: color }, disabled ? styles.disabled : {}]}>
					<Text style={[styles.text, disabled ? styles.textDisabled : {}]}>
						{title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
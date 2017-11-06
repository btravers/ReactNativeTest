import React, { PureComponent } from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default class Todo extends PureComponent {
	_onPress = () => {
		const { id, onPress } = this.props
		onPress(id)
	}

	render() {
		const { text, completed } = this.props
		return (
			<Text 
				onPress={this._onPress} 
				style={[styles.container, { textDecorationLine: completed ? 'line-through' : 'none' }]}
			>
				{text}
			</Text>
		)
	}
}
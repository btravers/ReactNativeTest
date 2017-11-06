import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

export default class Input extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    _onChangeText = (text) => {
		this.setState({ text })
    }
    
    _onAddTodo = () => {
        const { text } = this.state
        const { addTodo } = this.props
        addTodo(text)
        this.setState({
            text: '', 
        })
	}

    render() {
        const { text } = this.state
        return (
            <TextInput
                style={styles.container} 
                onSubmitEditing={this._onAddTodo}
                onChangeText={this._onChangeText}
                value={text} 
            />
        )
    }
}

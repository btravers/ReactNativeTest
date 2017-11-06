import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'

import Todo from './Todo'
import styles from './styles'

export default class List extends PureComponent {
    _renderItem = ({ item }) => {
        const { toggleCompleteTodo } = this.props
		return (
            <Todo
                onPress={toggleCompleteTodo}
                id={item.key}
                {...item}
            />
        )
    }
    
    render() {
        const { todos } = this.props
        return (
            <FlatList
                style={styles.container}
                data={todos}
                renderItem={this._renderItem}
            />
        )
    }    
}
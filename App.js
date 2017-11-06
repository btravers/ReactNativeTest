import React, { PureComponent } from 'react'
import { TouchableHighlight, FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		padding: 10,
	},
	title: {
		alignSelf: 'center',
		fontWeight: '700',
		fontSize: 75,
		marginTop: 10,	
	},
	todoList: {
		width: '100%',
		paddingLeft: '10%',		
	},
	todoInput: {
		fontSize: 30,
		marginTop: 10,
	},
	todo: {
		fontSize: 30,
	},
	actionButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10,
	},
	button: {
		flex: 1,
		margin: 5,		
	},
	buttonContainer: {
		marginBottom: 10,
		alignItems: 'center',
		elevation: 4,
	},
	buttonDisabled: {
		elevation: 0,
		backgroundColor: '#DFDFDF',		
	},
	buttonText: {
		fontSize: 20,
		fontWeight: '700',
		padding: 20,
		color: 'white',
	},
	buttonTextDisabled: {
		color: '#A1A1A1',
	},
})

class Todo extends PureComponent {
	_onPress = () => {
		const { value, onPress } = this.props
		onPress(value)
	}

	render() {
		const { value, completed } = this.props
		return (
			<Text 
				onPress={this._onPress} 
				style={[styles.todo, { textDecorationLine: completed ? 'line-through' : 'none' }]}
			>
				{value}
			</Text>
		)
	}
}

class Button extends PureComponent {
	render() {
		const { title, disabled, onPress, color } = this.props
		return (
			<TouchableHighlight
				style={styles.button}
			 	disabled={disabled}
				onPress={onPress}
				underlayColor='white'
			>
				<View style={[styles.buttonContainer, { backgroundColor: color }, disabled ? styles.buttonDisabled : {}]}>
					<Text style={[styles.buttonText, disabled ? styles.buttonTextDisabled : {}]}>
						{title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

class App extends PureComponent {
	constructor(props) {
		super(props)
		
		this.state = {
			text: '',
			todoList: [],
			hide: false,
		}
	}

	_onChangeText = (text) => {
		this.setState({ text })
	}

	_onAddTodo = () => {
		const { text, todoList } = this.state
		if (!todoList.find(todo => todo.key === text)) {
			this.setState({
				text: '',
				todoList: [ 
					...todoList, 
					{ 
						key: text, 
					}, 
				], 
			})
		}
	}

	_onPressTodo = (key) => {
		const { todoList } = this.state
		this.setState({
			todoList: todoList.map(todo => todo.key === key ? { ...todo, completed: !todo.completed } : todo),
		})
	}

	_renderItem = ({ item }) => (
		<Todo
			onPress={this._onPressTodo}
			value={item.key} 
			{...item}
		/>
	)

	_deleteCompletedTodo = () => {
		const { todoList } = this.state
		this.setState({
			todoList: todoList.filter(({ completed }) => !completed), 
		})
	}

	_toggleHide = () => {
		const { hide } = this.state
		this.setState({
			hide: !hide,
		})
	}

  	render() {
  		const { hide, text, todoList } = this.state
    	return (	    	
      		<KeyboardAvoidingView 
      			behavior='padding'
      			style={styles.container}
      		>
        		<Text style={styles.title}>
        			TODO LIST
        		</Text>
        		<View style={styles.actionButtons}>
    				<Button
    					title='Delete'
    					onPress={this._deleteCompletedTodo}
    					disabled={todoList.reduce((acc, { completed }) => acc && !completed, true)}
    					color='#FF1744'
    				/>
    				<Button
    					title={hide ? 'Show' : 'Hide'}
      					onPress={this._toggleHide}
    					color='#1DE9B6'
	   				/>
	       		</View>
        		<FlatList
        			style={styles.todoList}
					data={hide ? todoList.filter(({ completed }) => !completed) : todoList}
					renderItem={this._renderItem}
					onPress={this._onPressTodo}
        		/>
        		<TextInput
        			style={styles.todoInput} 
        			onSubmitEditing={this._onAddTodo}
        			onChangeText={this._onChangeText}
        			value={text} 
     			/>
	      	</KeyboardAvoidingView>
    	)
  	}
}

export default App
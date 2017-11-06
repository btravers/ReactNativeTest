import React, { PureComponent } from 'react'
import { TouchableHighlight, FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'


const store = createStore(reducers)

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
)	

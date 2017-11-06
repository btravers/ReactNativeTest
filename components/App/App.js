import React, { PureComponent } from 'react'
import { KeyboardAvoidingView } from 'react-native'

import Title from './Title'
import Controls from './Controls'
import List from './List'
import Input from './Input'
import styles from './styles'

export default () => (	    	
	<KeyboardAvoidingView 
		behavior='padding'
		style={styles.container}
	>
		<Title />
		<Controls />
		<List />
		<Input />        		
	</KeyboardAvoidingView>
)
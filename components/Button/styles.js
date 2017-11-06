import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,		
	},
	inner: {
		marginBottom: 10,
		alignItems: 'center',
		elevation: 4,
	},
	disabled: {
		elevation: 0,
		backgroundColor: '#DFDFDF',		
	},
	text: {
		fontSize: 20,
		fontWeight: '700',
		padding: 20,
		color: 'white',
	},
	textDisabled: {
		color: '#A1A1A1',
	},
})
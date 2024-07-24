import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'center',
	},
	displayContainer: {
		flex: 2,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: 20,
	},
	displayText: {
		fontSize: 48,
		color: '#333',
	},
	buttonContainer: {
		flex: 3,
		width: '80%',
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	button: {
		flex: 1,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		elevation: 3,
		margin: 2,
		padding: 15,
	},
	buttonText: {
		fontSize: 34,
		color: '#333',
	},
	zeroButton: {
		flex: 2,
		paddingLeft: 35,
		paddingRight: 35,
	},
	zeroButtonText: {
		marginLeft: 10,
	},
	operatorButton: {
		backgroundColor: '#f0f0f0',
	},
	operatorButtonText: {
		color: '#ff9500',
	},
	equalButton: {
		flex: 1,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		elevation: 3,
	},
	equalButtonText: {
		fontSize: 32,
		color: '#fff',
	},
	clearButton: {
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f0f0f0',
		marginTop: 10,
		elevation: 3,
		padding: 10,
	},
	clearButtonText: {
		fontSize: 24,
		color: '#333',
	},
});
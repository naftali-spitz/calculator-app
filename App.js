import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity }
	from 'react-native';

export default function App() {

	// State variables
	const [displayValue, setDisplayValue] = useState('0');
	const [operator, setOperator] = useState(null);
	const [firstValue, setFirstValue] = useState('');
    const [operatorHistory, setOperatorHistory] = useState([]);
    const [operandHistory, setOperandHistory] = useState([]);
    const [lastOperation, setLastOperation] = useState(null);

	// Function to handle number inputs
	const handleNumberInput = (num) => {
		if (displayValue === '0') {
			setDisplayValue(num.toString());
		} else {
			setDisplayValue(displayValue + num);
		}
	};

	// Function to handle operator inputs
	const handleOperatorInput = (operator) => {
        setOperatorHistory([...operatorHistory, operator]);
        setOperandHistory([...operandHistory, parseFloat(displayValue)]);
        setDisplayValue('0');
        setLastOperation(operator);
    };

	// Function to handle equal button press
	const handleEqual = () => {
        const newOperandHistory = [...operandHistory, parseFloat(displayValue)];
        setOperandHistory(newOperandHistory);

        let result = newOperandHistory[0];
        for (let i = 0; i < operatorHistory.length; i++) {
            const operator = operatorHistory[i];
            const operand = newOperandHistory[i + 1];

            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    result /= operand;
                    break;
            }
        }

        setDisplayValue(result.toString());
        setOperatorHistory([]);
        setOperandHistory([]);
        setLastOperation(null);
    };

	// Function to handle clear button press
	const handleClear = () => {
		setDisplayValue('0');
		setOperator(null);
		setFirstValue('');
	};

    const handlePercentage = () => {
        if (operator === null) {
            // Calculate the percentage of the current value
            const percentageValue = parseFloat(displayValue) / 100;
            setDisplayValue(percentageValue.toString());
        } else {
            // Calculate the percentage of the first value
            const num1 = parseFloat(firstValue);
            const num2 = parseFloat(displayValue);
            const percentageValue = num1 * (num2 / 100);
            setDisplayValue(percentageValue.toString());
        }
    };

    const handlePlusMinus = () => {
        if (displayValue !== '0') {
            setDisplayValue((parseFloat(displayValue) * -1).toString());
        }
    };


	return (
		<View style={styles.container}>
			<View style={styles.displayContainer}>
			    <View style={styles.rectangle}>
                    <Text style={styles.displayText}>
                        {displayValue}
                    </Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleClear}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePlusMinus()}
                    >
                        <Text style={styles.buttonText}>+-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePercentage()}
                    >
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.button]}
                        onPress={() => handleOperatorInput('/')}
                    >
                        <Text style={[
                            styles.buttonText,
                            styles.buttonText
                        ]}>
                            /
                        </Text>
                    </TouchableOpacity>
                </View>

				<View style={styles.row}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(7)}
					>
						<Text style={styles.buttonText}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(8)}
					>
						<Text style={styles.buttonText}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(9)}
					>
						<Text style={styles.buttonText}>9</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, styles.button]}
						onPress={() => handleOperatorInput('*')}
					>
						<Text style={[
							styles.buttonText,
							styles.buttonText
						]}>
							×
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(4)}
					>
						<Text style={styles.buttonText}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(5)}
					>
						<Text style={styles.buttonText}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(6)}
					>
						<Text style={styles.buttonText}>6</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, styles.button]}
						onPress={() => handleOperatorInput('+')}
					>
						<Text style={[
							styles.buttonText,
							styles.buttonText
						]}>
							+
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(1)}
					>
						<Text style={styles.buttonText}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(2)}
					>
						<Text style={styles.buttonText}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => handleNumberInput(3)}
					>
						<Text style={styles.buttonText}>3</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, styles.button]}
						onPress={() => handleOperatorInput('-')}
					>
						<Text style={[
							styles.buttonText,
							styles.buttonText
						]}>
							−
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity
						style={[styles.button, styles.button]}
						onPress={() => handleNumberInput(0)}
					>
						<Text style={[
							styles.buttonText,
							styles.buttonText
						]}>
							0
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, styles.button]}
						onPress={() => handleNumberInput('.')}
					>
						<Text style={[
							styles.buttonText,
							styles.buttonText
						]}>
							.
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.equalButton}
						onPress={handleEqual}
					>
						<Text style={styles.equalButtonText}>=</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3b4551',
		alignItems: 'center',
		justifyContent: 'center',
	},
	displayContainer: {
		flex: 2,
		backgroundColor: '#3b4551',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: 20,
	},
	rectangle: {
        width: 350,
        height: 100,
        backgroundColor: '#009c55',
        borderRadius: 10,
    },
	displayText: {
		fontSize: 48,
		color: '#ffffff',
        textAlign: 'right',
        flex: 1,
        marginRight: 20,
	},
	buttonContainer: {
		flex: 3,
		width: '90%',
	},
	row: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	button: {
		flex: 1,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e800ce',
		elevation: 3,
		margin: 2,
		padding: 15,
	},
	buttonText: {
		fontSize: 30,
		color: '#333',
	},
	equalButton: {
		flex: 3,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff0006',
		elevation: 3,
	},
    equalButtonText: {
        fontSize: 32,
        color: '#333',
    },
});

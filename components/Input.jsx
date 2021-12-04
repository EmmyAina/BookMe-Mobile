import React from "react";
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

const Input = (props) => {
	return (
		<View>
			<TouchableOpacity style={styles.inputArea} activeOpacity={1}>
				<TextInput
					style={styles.input}
					placeholder={props.placeholder}
					keyboardType={props.keyboardType}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// paddingBottom: 100,
	},
	inputArea: {
		backgroundColor: "#262a34",
		height: 55,
		width: 350,
		borderRadius: 100 / 7,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		padding: 10,
		fontSize: 15,
		color: 'white',
		height: 50,
		width: '100%'
	}
});
export default Input;

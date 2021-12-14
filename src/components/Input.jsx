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
		<View style={{flex:1,}}>
			<TouchableOpacity style={styles(props).inputArea} activeOpacity={1}>
				<TextInput
					style={styles(props).input}
					placeholder={props.placeholder}
					keyboardType={props.keyboardType}
					placeholderTextColor={props.placeholderTextColor}
					onChangeText={props.onChangeText}
					secureTextEntry={props.secureTextEntry}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = (props) =>
	StyleSheet.create({
		container: {
			// paddingBottom: 100,
		},
		inputArea: {
			// backgroundColor: "#262a34",
			backgroundColor: props.inputColor,
			height: 55,
			width: "100%",
			borderRadius: 100 / 7,
			justifyContent: "center",
			alignItems: "center",
		},
		input: {
			padding: 10,
			fontSize: 15,
			color: props.textColor,
			height: 50,
			width: "100%",
		},
	});
export default Input;

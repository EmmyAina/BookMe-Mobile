import React from "react";
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import { useState } from "react";


const PasswordInput = (props) => {
	const [isSecureEntry, setSecureEntry] = useState(true);
	return (
		<View style={styles(props).container}>
			<TouchableOpacity style={styles(props).inputArea} activeOpacity={1}>
				<TextInput
					style={styles(props).input}
					placeholder={props.placeholder}
					keyboardType={props.keyboardType}
					placeholderTextColor={props.placeholderTextColor}
					onChangeText={props.onChangeText}
					secureTextEntry={isSecureEntry}
				/>
				<Icons
					name={isSecureEntry ? "eye-outline" : "eye-off-outline"}
					size={25}
					style={{ paddingRight: 0 }}
					onPress={() => 
						setSecureEntry((prevState) => !prevState)
					}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = (props) =>
	StyleSheet.create({
		container: {
			// paddingBottom: 100,
			// flex: 0.9,
			flexDirection: 'column'
		},
		inputArea: {
			// backgroundColor: "#262a34",
			flexDirection:'row',
			backgroundColor: props.inputColor,
			height: 55,
			width: 350,
			borderRadius: 100 / 7,
			alignItems: "center",
		},
		input: {
			padding: 10,
			fontSize: 15,
			color: props.textColor,
			height: 50,
			width: '90%',
		},
	});

export default PasswordInput;

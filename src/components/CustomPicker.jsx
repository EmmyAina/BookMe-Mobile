import React, { useState } from "react";
import {
	StyleSheet,
	SafeAreaView,
	View,
	TouchableOpacity,
	Modal,
	Text,
} from "react-native";
import ModalPicker from "./ModalPicker";
import { darkTheme } from "../config/colors";
import TriangleDown from "./DropDownTriangle";

const theme = darkTheme;

const CustomPicker = (props) => {
	const [choice, setChoice] = useState("-");
	const [isVisible, setVisibility] = useState(false);

	const changeModalVisibility = (bool) => {
		setVisibility(bool);
	};

	const chosenValue = (selectedValue) => {
		setChoice(selectedValue);
		props.onPress(selectedValue)
	};
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={{
					flex: 1,
					alignItems: "flex-start",
					paddingLeft: 8,
				}}
				onPress={() => changeModalVisibility(true)}
			>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
					}}
				>
					<Text style={{ color: theme.placeholderTextColor, flex: 0.6 }}>
						{props.title}
					</Text>
					<Text style={{ color: theme.formText, flex: 0.3 }}>{choice}</Text>
					<View style={{ flex: 0.08 }}>
						<TriangleDown />
					</View>
				</View>
			</TouchableOpacity>
			<Modal
				transparent={true}
				animationType="fade"
				visible={isVisible}
				onRequestClose={() => changeModalVisibility(false)}
			>
				<ModalPicker
					option={props.options}
					changeModalVisibility={changeModalVisibility}
					chosenValue={chosenValue}
				/>
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: theme.formInput,
		borderColor: theme.formInput,
		borderWidth: 2,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		borderRadius: 12,
		width: 200,
		height: 50,
	},
});


export default CustomPicker;

import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView, Modal, Dimensions, Text } from "react-native";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props) => {
	const options = props.option;
	const onPressItem = (selectedOption) => {
		props.changeModalVisibility(false);
		props.chosenValue(selectedOption);

	}
	const option = options.map((item, index) => {
		return (
			<TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
				<Text style={styles.text}>{item}</Text>
			</TouchableOpacity>
		);
	});
	return (
		<TouchableOpacity
			onPress={props.changeModalVisibility}
			style={styles.container}
		>
			<View style={[styles.modal, { width: WIDTH - 50, height: HEIGHT / 5 }]}>
				<ScrollView>
					{option}
				</ScrollView>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modal: {
		backgroundColor: "white",
		borderRadius: 10,
	},
	option:{
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: 'lightgrey',
		borderWidth: 0.17
	},
	text: {
		fontSize: 20,
		margin: 15,
	}
});

export default ModalPicker;

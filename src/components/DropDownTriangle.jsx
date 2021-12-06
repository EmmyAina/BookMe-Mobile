import React from "react";
import { StyleSheet, View, } from "react-native";

// const Triangle = (props) => {
// 	return <View style={[styles.triangle, {...props.style}]} />;
// };

const TriangleDown = (props) => {
	return <View style={[styles.triangle, { ...props.style }]} />;

}

const styles = StyleSheet.create({
	triangle: {
		width: 0,
		height: 0,
		backgroundColor: "transparent",
		borderStyle: "solid",
		borderLeftWidth: 5,
		borderRightWidth: 5,
		borderBottomWidth: 10,
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderBottomColor: "grey",
		transform: [{ rotate: "180deg" }],
	}
});

export default TriangleDown;
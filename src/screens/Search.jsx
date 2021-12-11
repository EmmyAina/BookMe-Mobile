import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { darkTheme } from "../config/colors";

const theme = darkTheme;

const Search = () => {
	return (
		<View style={styles.container}>
			<Text style={{ color: "white" }}>Search Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.generalBackground,
	},
});

export default Search;

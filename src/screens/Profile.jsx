import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { darkTheme } from "../config/colors";

const theme = darkTheme;

export const ProfleData = (props) => {
	return (
		<View>
			<View style={{ marginLeft: 10 }}>
				<TouchableOpacity
					style={{
						width: "95%",
						backgroundColor: props.color,
						height: 200,
						borderRadius: 50 / 6,
						flexDirection: "column",
					}}
					onPress={props.onPress}
					activeOpacity={1}
				>
					<View
						style={{
							flexDirection: "column",
							flex: 1,
							marginLeft: 10,
							marginTop: 10,
						}}
					>
						<View style={styles.detail}>
							<Text style={styles.head}>Name</Text>
							<Text style={styles.mainInfo}>@EmmanuelAina</Text>
							<TouchableOpacity style={styles.bottomLine}></TouchableOpacity>
						</View>
						<View style={styles.detail}>
							<Text style={styles.head}>Email Address</Text>
							<Text style={styles.mainInfo}>ainae06@gmail.com</Text>
							<TouchableOpacity style={styles.bottomLine}></TouchableOpacity>
						</View>
						<View style={styles.detail}>
							<Text style={styles.head}>Phone Number</Text>
							<Text style={styles.mainInfo}>+238113611262</Text>
							<TouchableOpacity style={styles.bottomLine}></TouchableOpacity>
						</View>
						<View style={styles.detail}>
							<Text style={styles.head}>Address</Text>
							<Text style={styles.mainInfo}>
								Christ Villa, Alabata FUNAAB, Abeokuta
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const Profile = () => {
	return (
		<View style={styles.container}>
			<View
				style={{ paddingTop: 70, flexDirection: "row", alignItems: "center" }}
			>
				<Text style={styles.pData}>Profile Data</Text>
			</View>
			<ProfleData color={theme.mainTheme} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: theme.generalBackground,
	},
	pData: { color: "white", fontWeight: "500", fontSize: 20, marginLeft: 10 },
	head: {
		fontSize: 15,
		color: theme.formInput,
		marginBottom: 5,
	},
	detail: { flex: 0.25 },
	bottomLine: {
		width: "95%",
		height: 1,
		backgroundColor: "#5f6470",
		marginTop: 5,
	},
	mainInfo: { color: theme.formText, fontSize: 20 },
});

export default Profile;

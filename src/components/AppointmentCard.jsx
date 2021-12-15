import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { darkTheme } from "../config/colors";
import MyButton from "./MyButton";

const theme = darkTheme;
export const Button = (props) => {
	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={{
						width: 150,
						backgroundColor: props.color,
						height: 50,
						borderRadius: 100 / 6,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={props.onPress}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							fontWeight: "500",
							color: props.textColor,
						}}
					>
						{props.text}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const AppointmentCard = (props) => {
	// const approvalStatus = false;
	// const img = require(props.image);

	// console.log();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.card} activeOpacity={1}>
				<View style={styles.serviceProvider}>
					<View>
						<Text style={{ fontSize: 25, marginLeft: 12 }}>{props.name}</Text>
						<Text
							style={{
								fontSize: 20,
								color: "lightgrey",
								marginLeft: 12,
								marginTop: 5,
							}}
						>
							{props.category}
						</Text>
					</View>
					<View>
						<Image
							source={require('../assets/images/uy1.jpg')}
							// source={img}
							style={{
								width: 70,
								height: 70,
								borderRadius: 70 / 2,
								marginLeft: 120,
							}}
						/>
					</View>
				</View>

				<View style={styles.divider}>
					<TouchableOpacity style={styles.dividerLine}></TouchableOpacity>
				</View>

				<View style={styles.scheduleTimimg}>
					<View style={styles.dateInfo}>
						<Ionicons name="ios-calendar" size={20} color={"grey"} />
						<Text style={{ marginLeft: 4 }}> {props.date}</Text>
					</View>
					<View style={styles.timeInfo}>
						<Ionicons name="ios-time" size={20} color={"grey"} />
						<Text style={{ marginLeft: 4 }}>{props.time}</Text>
					</View>
					<View style={styles.status}>
						{props.approvalStatus == true ? (
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<TouchableOpacity
									style={styles.approvedIcon}
								></TouchableOpacity>
								<Text> Approved </Text>
							</View>
						) : (
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<TouchableOpacity
									style={styles.notApprovedIcon}
								></TouchableOpacity>
								<Text> Awaiting </Text>
							</View>
						)}
						{/* <Ionicons name="success" size={20} color={"grey"} /> */}
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						marginTop: 10,
						justifyContent: "space-around",
					}}
				>
					<Button
						text="Cancel"
						color="lightgrey"
						textColor="black"
						onPress={props.cancel}
					/>
					<Button
						text="Reschedule"
						color={theme.mainTheme}
						textColor="white"
						onPress={props.reschedule}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		alignItems: "center",
	},
	card: {
		width: "90%",
		height: 200,
		backgroundColor: theme.formText,
		borderRadius: 50 / 2,
		marginBottom: 10,
	},
	serviceProvider: { flexDirection: "row", marginTop: 5, alignItems: "center" },
	divider: {
		alignItems: "center",
	},

	dividerLine: {
		marginTop: 10,
		width: "90%",
		height: 1.5,
		backgroundColor: "lightgrey",
	},
	scheduleTimimg: {
		// flex:1,
		flexDirection: "row",
		marginTop: 12,
	},
	dateInfo: {
		flexDirection: "row",
		marginLeft: 12,
		alignItems: "center",
	},
	timeInfo: {
		flexDirection: "row",
		marginLeft: 30,
		alignItems: "center",
	},
	status: {
		flexDirection: "row",
		marginLeft: 30,
		alignItems: "center",
	},
	approvedIcon: {
		backgroundColor: "lightgreen",
		height: 10,
		width: 10,
		borderRadius: 10 / 2,
	},
	notApprovedIcon: {
		backgroundColor: "yellow",
		height: 10,
		width: 10,
		borderRadius: 10 / 2,
	},
});

export default AppointmentCard;

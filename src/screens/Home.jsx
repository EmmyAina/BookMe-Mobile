import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import {
	backgroundColor,
	shadowColor,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { darkTheme } from "../config/colors";
import AppointmentCard from "../components/AppointmentCard";
import { Ionicons } from "@expo/vector-icons";
import SvgComponent from "../components/SvgImage";
import { LinearGradient } from "expo-linear-gradient";

const theme = darkTheme;

// const today = [
// 	{
// 		id: "qwwre-1232h-j112-sq122-uuide3",
// 		name: "Zanga's Cutx",
// 		category: "Men's Cut",
// 		approvalStatus: false,
// 		date: "26-Dec-2021",
// 		time: "11:30",
// 	},
// ];

const today = [];


const Home = (props, { navigation }) => {
	// Render appointmet data from API
	const appointment = today.map((item, index) => {
		return (
			<AppointmentCard
				name={item.name}
				approvalStatus={item.approvalStatus}
				category={item.category}
				date={item.date}
				time={item.time}
				cancel={() => {
					console.log("Cancel the schedule with id: ", item.id);
				}}
				reschedule={() => {
					console.log("Reschedule the schedule with id: ", item.id);
				}}
			/>
		);
	});

	return (
		<View style={styles.container}>
			<View
				style={{ paddingTop: 70, flexDirection: "row", alignItems: "center" }}
			>
				<View style={styles.avatarText}>
					<Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
						Hi Emmanuel 👋{" "}
					</Text>
				</View>
				<View style={styles.avatarImage}>
					<TouchableOpacity
						onPress={() => props.navigation.navigate("Profile")}
					>
						<SvgComponent width="30" height="30" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.addNewContainer}>
				<TouchableOpacity style={styles.addNewButton}>
					<LinearGradient
						colors={[theme.mainTheme, "#6376ff", "#6f80fc"]}
						style={styles.addNewButton}
					>
						<Ionicons
							color="white"
							name="add-circle"
							size={70}
							style={{ marginLeft: 0, marginTop: 10 }}
						/>
						<Text style={styles.createNewText}>Create New</Text>
						<Text
							style={{
								color: "lightgrey",
								fontSize: 15,
								marginTop: 4,
							}}
						>
							Book New Appointment
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>

			<View>
				{today.length != 0 ? (
					<View style={{ height: 350 }}>
						<Text style={styles.upcming}>Today</Text>
						<ScrollView
							style={{ marginTop: 20, marginBottom: 1 }}
							showsVerticalScrollIndicator={true}
						>
							{appointment}
						</ScrollView>
						<TouchableOpacity
							onPress={() => props.navigation.navigate("Schedule")}
						>
							<Text style={styles.viewAll}>View All</Text>
						</TouchableOpacity>
					</View>
				) : (
					<ScrollView
						style={{ marginTop: 50, marginBottom: 100, height: 200 }}
						showsVerticalScrollIndicator={false}
					>
						<Text style={styles.noApt}>You have no Appointments Today!</Text>
					</ScrollView>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.generalBackground,
	},
	avatarText: {
		marginLeft: 20,
	},
	avatarImage: {
		marginLeft: 50,
		width: 70,
		height: 70,
		backgroundColor: theme.formInput,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 90 / 1,
	},
	addNewContainer: {
		// alignItems: "center",
		marginTop: 30,
		marginLeft: 20,
	},
	addNewButton: {
		alignItems: "center",
		width: 180,
		height: 150,
		borderRadius: 50 / 4,
	},
	createNewText: {
		color: "white",
		fontSize: 20,
		marginLeft: 0,
		marginTop: 15,
		fontWeight: "800",
	},
	upcming: {
		color: "white",
		fontSize: 25,
		fontWeight: "400",
		// textAlign: "center",
		marginTop: 50,
		marginLeft: 20,
	},
	noApt: {
		textAlign: "center",
		fontWeight: "600",
		fontSize: 30,
		color: "#5f6470",
		marginTop: 100,
	},
	viewAll: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		// textDecorationLine: "underline",
	},
});

export default Home;

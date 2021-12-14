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

// const fakeData = [
// 	{
// 		id: "qwwre-1232h-j112-sq122-uuide3",
// 		name: "Zanga's Cutx",
// 		category: "Men's Cut",
// 		approvalStatus: false,
// 		date: "26-Dec-2021",
// 		time: "11:30",
// 	},
// 	{
// 		id: "hj112-1232-sq122-uuide3-qwwre",
// 		name: "Damies Glam",
// 		category: "Make-Up",
// 		approvalStatus: true,
// 		date: "03-Jan-2022",
// 		time: "02:00",
// 	},
// 	{
// 		id: "hj112-sq122-uuide3-qwwre-1232",
// 		name: "Seyi Consults",
// 		category: "Electronics",
// 		approvalStatus: true,
// 		date: "22-Jan-2022",
// 		time: "09:00",
// 	},
// ];
const fakeData = [];

const Home = (props, {navigation}) => {
	const appointment = fakeData.map((item, index) => {
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
					<Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
						Hi Emmanuel 👋{" "}
					</Text>
				</View>
				<View style={styles.avatarImage}>
					<TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
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
							style={{ marginLeft: 15, marginTop: 10 }}
						/>
						<Text
							style={{
								color: "white",
								fontSize: 20,
								marginLeft: 15,
								marginTop: 15,
								fontWeight: "800",
							}}
						>
							Create New
						</Text>
						<Text
							style={{
								color: "lightgrey",
								fontSize: 15,
								marginLeft: 15,
								marginTop: 0,
							}}
						>
							Book New Appointment
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>

			<View>
				{fakeData.length != 0 ? (
					<ScrollView
						style={{ marginTop: 50, marginBottom: 400 }}
						showsVerticalScrollIndicator={false}
					>
						{appointment}
					</ScrollView>
				) : (
					<ScrollView
						style={{ marginTop: 50, marginBottom: 100, height: 200 }}
						showsVerticalScrollIndicator={false}
					>
						<Text
							style={{
								textAlign: "center",
								fontWeight: "600",
								fontSize: 30,
								color: "#5f6470",
								marginTop: 100,
							}}
						>
							You have no Appointments!
						</Text>
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
		flex: 0.8,
		marginLeft: 15,
	},
	avatarImage: {
		flex: 0.2,
		marginRight: 20,
		width: 60,
		height: 60,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 90 / 1,
		borderWidth: 1,
		borderColor: "lightgrey",
	},
	addNewContainer: {
		marginTop: 30,
		marginLeft: 15,
	},
	addNewButton: {
		width: 200,
		height: 150,
		borderRadius: 50 / 4,
	},
});

export default Home;

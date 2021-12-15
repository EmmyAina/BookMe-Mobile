import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { darkTheme } from "../config/colors";
import AppointmentCard from "../components/AppointmentCard";

const theme = darkTheme;
export const Button = (props) => {
	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={{
						width: 100,
						backgroundColor: props.color,
						height: 40,
						borderRadius: 100 / 6,
						alignItems: "center",
						justifyContent: "center",
						marginRight: 10,
					}}
					onPress={props.onPress}
					activeOpacity={1}
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

const fakeData = [
	{
		id: "qwwre-1232h-j112-sq122-uuide3",
		name: "Zanga's Cutx",
		category: "Men's Cut",
		approvalStatus: false,
		date: "26-Dec-2021",
		time: "11:30",
		img: "../assets/images/uy1.jpg",
	},
	{
		id: "hj112-1232-sq122-uuide3-qwwre",
		name: "Damies Glam",
		category: "Make-Up",
		approvalStatus: true,
		date: "03-Jan-2022",
		time: "02:00",
		img: "../assets/images/lady1.jpg",
	},
	{
		id: "hj112-sq122-uuide3-qwwre-1232",
		name: "Seyi Consults",
		category: "Electronics",
		approvalStatus: true,
		date: "22-Jan-2022",
		time: "09:00",
		img: "../assets/images/lady1.jpg",
	},
];
// const fakeData = [];

const Schedule = (props, { navigation }) => {
	const [clicked, setclicked] = useState(false);
	// Render appointmet data from API
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
				image={item.img}
			/>
		);
	});

	return (
		<View style={styles.container}>
			<View style={{ paddingTop: 70 }}>
				<View style={styles.headingText}>
					<Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
						Schedule
					</Text>
				</View>
			</View>

			<View style={{ alignItems: "center", marginTop: 20 }}>
				<TouchableOpacity style={styles.scheduleCategory} activeOpacity={1}>
					<Button
						text="All"
						color={theme.mainTheme}
						textColor={theme.formText}
						onPress={props.cancel}
					/>

					<TouchableOpacity
						style={{ width: 1, height: 40, backgroundColor: "lightgrey" }}
					></TouchableOpacity>

					<Button
						text="Upcoming"
						color="white"
						textColor="black"
						onPress={props.cancel}
					/>
					<TouchableOpacity
						style={{ width: 1, height: 40, backgroundColor: "lightgrey" }}
					></TouchableOpacity>
					<Button
						text="Awaiting"
						color="white"
						textColor="black"
						onPress={props.cancel}
					/>
				</TouchableOpacity>
			</View>

			<View>
				{fakeData.length != 0 ? (
					<View style={{ height: 350 }}>
						<ScrollView
							style={{ marginTop: 20, marginBottom: 1 }}
							showsVerticalScrollIndicator={true}
						>
							{appointment}
						</ScrollView>
						<TouchableOpacity
							onPress={() => props.navigation.navigate("Schedule")}
						></TouchableOpacity>
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
	headingText: {
		marginLeft: 20,
	},
	scheduleCategory: {
		flexDirection: "row",
		width: "90%",
		borderRadius: 40 / 2,
		height: 50,
		backgroundColor: theme.formText,
		justifyContent: "center",
		alignItems: "center",
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

export default Schedule;

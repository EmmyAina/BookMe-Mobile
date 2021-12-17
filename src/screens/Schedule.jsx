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
					// activeOpacity={1}
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
		name: "Kunlex Cutz",
		category: "Men's Hair",
		approvalStatus: false,
		date: "26-Dec-2021",
		time: "11:30",
		img: "https://www.bellanaija.com/wp-content/uploads/2018/09/3-10.jpg",
	},
	{
		id: "hj112-1232-sq122-uuide3-qwwre",
		name: "Damies Glam",
		category: "Make-Up",
		approvalStatus: true,
		date: "03-Jan-2022",
		time: "02:00",
		img: "https://ocdn.eu/pulscms-transforms/1/cCPktkqTURBXy85Njk0YjRlNzljZmNmNzFmZmQ5NGIxZDI4YzZiZjllYy5qcGVnkpUDAB_NA-jNAjKTBc0DB80Bsw",
	},
	{
		id: "hj112-sq122-uuide3-qwwre-1232",
		name: "Seyi Consults",
		category: "Electronics",
		approvalStatus: true,
		date: "22-Jan-2022",
		time: "09:00",
		img: "https://mfidie.com/wp-content/uploads/2020/09/solar-panels-nigeria-min.jpg",
	},
];

const topButton = ["All", "Upcoming", "Awaiting"];
const onTopButtonPress = () => {
	seetButtonAndTextColor({
		buttonColor: theme.mainTheme,
		textColor: theme.formText,
	});
}
// const fakeData = [];

const Schedule = (props, { navigation }) => {
	const [clicked, setclicked] = useState(false);

	// Render Buttons at the top of the page
	const TopButton = topButton.map((item, index) => {
		const [buttonAndTextColor, seetButtonAndTextColor] = useState({
			buttonColor: "white",
			textColor: "black",
		});
		// return clicked == true ? (
		// 	<Button
		// 		text={item}
		// 		color={buttonAndTextColor.buttonColor}
		// 		textColor={buttonAndTextColor.textColor}
		// 		onPress={onTopButtonPress}
		// 	/>
		// ) : (
		// 	<Button
		// 		text={item}
		// 		color={theme.mainTheme}
		// 		textColor={theme.formText}
		// 		// onPress={props.cancel}
		// 	/>
		// );
		return (
			<Button
				text={item}
				color={buttonAndTextColor.buttonColor}
				textColor={buttonAndTextColor.textColor}
				onPress={() => {
					seetButtonAndTextColor({
						buttonColor: theme.mainTheme,
						textColor: theme.formText,
					});
				}}
			/>
		);
	});
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
						Bookings
					</Text>
				</View>
			</View>

			<View style={{ alignItems: "center", marginTop: 20 }}>
				<TouchableOpacity style={styles.scheduleCategory} activeOpacity={1}>
					{TopButton}
					{/* <TouchableOpacity
						style={{ width: 1, height: 40, backgroundColor: "lightgrey" }}
					></TouchableOpacity> */}
				</TouchableOpacity>
			</View>

			<View>
				{fakeData.length != 0 ? (
					<View style={{ height: 550 }}>
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

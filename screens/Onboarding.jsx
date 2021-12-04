import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, Button, TouchableOpacity } from "react-native";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
const Onboarding = () => {
	const image = {
		uri: "https://thumbs.dreamstime.com/b/making-appointment-online-patients-front-desk-receptionist-eye-doctor-201814854.jpg",
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/images/stck1.jpeg")}
					style={styles.image}
				/>
			</View>
			<View style={styles.txtandButtonContainer}>
				<View>
					<Text style={styles.headingText}>Book-Me</Text>
				</View>
				<View style={styles.description}>
					<Text
						style={{
							paddingHorizontal: 15,
							fontWeight: "100",
							textAlign: "center",
							fontSize: 20,
							color: "darkslateblue",
						}}
					>
						Place a booking with your favourite service provider be it Make-up
						artists, Barbers, Electricians...
					</Text>
				</View>
				<View>
					<MyButton text="Get Started" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		// justifyContent: "center",
	},
	image: {
		height: 450,
		width: 450,
	},
	txtandButtonContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	headingText: {
		fontSize: 30,
		color: "#545ed1",
	},
	description: {
		// paddingHorizontal: 10,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	getStartedButton: {
		backgroundColor: "#545ed1",
		height: 50,
		width: 300,
		borderRadius: 100 / 6,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
});

export default Onboarding;

import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	ImageBackground,
	Button,
	TouchableOpacity,
} from "react-native";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { darkTheme } from "../config/colors";

const theme = darkTheme;
const Onboarding = (props, { navigation }) => {
	const image = {
		uri: "https://thumbs.dreamstime.com/b/making-appointment-online-patients-front-desk-receptionist-eye-doctor-201814854.jpg",
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/images/1.png")}
					style={styles.image}
				/>
			</View>
			<View style={styles.txtContainer}>
				<View>
					<Text style={styles.headingText}>Book-Me</Text>
				</View>
				<View>
					<Text style={styles.description}>
						Place a booking with your favourite service provider be it Make-up
						artists, Barbers, Electricians...
					</Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<MyButton
					text="Get Started"
					color={theme.mainTheme}
					textColor={theme.formText}
					onPress={() => props.navigation.navigate("Login")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.generalBackground,
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		height: 450,
		width: 450,
	},
	txtContainer: {
		paddingTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	headingText: {
		fontSize: 25,
		color: "white",
		fontWeight: "700",
	},
	description: {
		paddingHorizontal: 50,
		fontWeight: "100",
		textAlign: "center",
		fontSize: 15,
		color: "white",
	},
	buttonContainer: {
		marginTop: 100,
		alignItems: "center",
		justifyContent: "center",
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

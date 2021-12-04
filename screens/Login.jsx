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

const Login = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.head1}> Welcome Back! </Text>
				<Text style={styles.head2}> Please sign in to your account </Text>
			</View>
			<View style={styles.inputForm}>
				<View style={{ paddingBottom: 8 }}>
					<Input placeholder="Email" keyboardType="email-address" />
				</View>
				<View>
					<Input placeholder="Password" keyboardType="default" />
				</View>
				<View>
					<TouchableOpacity>
						<Text style={styles.forgotPassword}>Forgot Password?</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					alignItems: "center",
					marginTop: 10,
					paddingTop: 60,
					marginVertical: 20,
				}}
			>
				<MyButton
					text="Sign In"
					color="#5468ff"
					textColor="white"
					hasImage={false}
				/>
				<MyButton
					text="Sign in with google"
					color="white"
					textColor="black"
					hasImage={true}
				/>
				<Text style={styles.outerText}>
					Don't have an account?<Text style={styles.innerText}> Sign Up</Text>
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#181a20",
	},
	headerContainer: {
		paddingTop: 160,
	},
	head1: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		paddingBottom: 12,
	},
	head2: {
		fontSize: 15,
		fontWeight: "bold",
		letterSpacing: 0,
		textAlign: "center",
		color: "darkgrey",
	},
	inputForm: {
		marginVertical: 50,
	},
	outerText: {
		paddingTop: 12,
		color: "darkgrey",
	},
	forgotPassword: {
		paddingTop: 12,
		color: "darkgrey",
		textAlign: "right",
	},
	innerText: {
		color: "#5468ff",
	},
});

export default Login;

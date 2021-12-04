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
import { darkTheme, lightTheme } from "../config/colors"
import { ThemeProvider } from "@react-navigation/native";

const theme = darkTheme;

const Login = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.head1}> Welcome Back! </Text>
				<Text style={styles.head2}> Please sign in to your account </Text>
			</View>
			<View style={styles.inputForm}>
				<View style={{ paddingBottom: 8 }}>
					<Input
						placeholder="Email"
						keyboardType="email-address"
						inputColor={theme.formInput}
						textColor={theme.formText}
						placeholderTextColor={theme.placeholderTextColor}
					/>
				</View>
				<View>
					<Input
						placeholder="Password"
						keyboardType="default"
						inputColor={theme.formInput}
						textColor={theme.formText}
						placeholderTextColor={theme.placeholderTextColor}
					/>
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
					color={theme.mainTheme}
					textColor="white"
					hasImage={false}
				/>
				<MyButton
					text="Sign in with google"
					color={theme.googleButton}
					textColor={theme.googleText}
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
		alignItems: "center",
		backgroundColor: theme.generalBackground,
	},
	headerContainer: {
		paddingTop: 160,
	},
	head1: {
		fontSize: 30,
		fontWeight: "bold",
		color: theme.mainHeader,
		textAlign: "center",
		paddingBottom: 12,
	},
	head2: {
		fontSize: 15,
		fontWeight: "bold",
		letterSpacing: 0,
		textAlign: "center",
		color: theme.secondaryHeader,
	},
	inputForm: {
		marginVertical: 50,
	},
	outerText: {
		paddingTop: 12,
		color: theme.secondaryHeader,
	},
	forgotPassword: {
		paddingTop: 12,
		color: "darkgrey",
		textAlign: "right",
	},
	innerText: {
		color: theme.mainTheme,
	},
});

export default Login;

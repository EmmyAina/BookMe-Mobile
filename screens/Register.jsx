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
import { darkTheme, lightTheme } from "../config/colors";
import PasswordInput from "../components/PasswordInput";

const theme = darkTheme;

const Register = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.head1}> Create a new account </Text>
				<Text style={styles.head2}> Please fill the form to continue </Text>
			</View>
			<View style={styles.inputForm}>
				<View style={{ paddingBottom: 8 }}>
					<Input
						placeholder="Email"
						keyboardType="email-address"
						inputColor={theme.formInput}
						textColor={theme.formText}
					/>
				</View>
				<View style={{ paddingBottom: 8 }}>
					<Input
						placeholder="Full Name"
						keyboardType="default"
						inputColor={theme.formInput}
						textColor={theme.formText}
					/>
				</View>
				<View style={{ paddingBottom: 8 }}>
					<Input
						placeholder="Phone Number"
						keyboardType="numeric"
						inputColor={theme.formInput}
						textColor={theme.formText}
					/>
				</View>
				<View>
					<PasswordInput
						placeholder="Password"
						keyboardType="default"
						inputColor={theme.formInput}
						textColor={theme.formText}
						placeholderTextColor={theme.placeholderTextColor}
					/>
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
					text="Sign Up"
					color="#5468ff"
					textColor="white"
					hasImage={false}
				/>
			</View>
			<View>
				<Text style={styles.haveAccount}>
					Have an account? <Text style={styles.innerText}> Sign In</Text>
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
		color: "white",
		textAlign: "center",
		paddingBottom: 12,
	},
	head2: {
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "center",
		color: theme.secondaryHeader,
	},
	inputForm: {
		marginVertical: 50,
	},
	haveAccount: {
		paddingTop: 12,
		color: theme.secondaryHeader,
		textAlign: "right",
	},
	innerText: {
		color: theme.mainTheme,
	},
});

export default Register;

import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	ImageBackground,
	Button,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { darkTheme, lightTheme } from "../config/colors";
import { ThemeProvider } from "@react-navigation/native";
import { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { MaterialCommunityIcons as Icons } from "@expo/vector-icons";
import apiRequest from "../helpers/api";
import { connect } from "react-redux";
import {
	updateUserData,
	updateAuthData,
	updateLoadingStatus,
} from "../actions/action";
const theme = darkTheme;

const Login = (props) => {
	const [isSecureEntry, setIsSecureEntry] = useState(true);
	const [credentials, setLogincredentials] = useState({
		email: "",
		password: "",
	});

	const collectEmail = (val) => {
		if (val.length !== 0) {
			setLogincredentials({
				...credentials,
				email: val,
			});
		} else {
			setLogincredentials({
				...credentials,
				email: val,
			});
		}
	};
	const collectPassword = (val) => {
		if (val.length !== 0) {
			setLogincredentials({
				...credentials,
				password: val,
			});
		} else {
			setLogincredentials({
				...credentials,
				password: val,
			});
		}
	};
	const user = credentials;
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : null}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
								onChangeText={(val) => collectEmail(val)}
							/>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-start",
							}}
						>
							<PasswordInput
								placeholder="Password"
								keyboardType="default"
								inputColor={theme.formInput}
								textColor={theme.formText}
								placeholderTextColor={theme.placeholderTextColor}
								onChangeText={(val) => collectPassword(val)}
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
							isLoading={props.loadingStatus}
							onPress={() => {
								props.updateUser(credentials);
								const apiResponse  = apiRequest(
									"account/login",
									"POST",
									credentials,
									props
								);
							}}
						/>
						<MyButton
							text="Sign in with google"
							color={theme.googleButton}
							textColor={theme.googleText}
							hasImage={true}
						/>
						<Text style={styles.outerText}>
							Don't have an account?
							<Text style={styles.innerText}> Sign Up</Text>
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
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

const mapStateToProps = (state) => {
	return {
		user: state.reducers.userData,
		authResponse: state.reducers.authData,
		loadingStatus: state.reducers.isLoading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (credentials) => dispatch(updateUserData(credentials)),
		updateAuthResponse: (payload) => dispatch(updateAuthData(payload)),
		updateLoading: (value) => dispatch(updateLoadingStatus(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

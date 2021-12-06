import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	ImageBackground,
	Button,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { darkTheme, lightTheme } from "../config/colors";
import PasswordInput from "../components/PasswordInput";
import { connect } from "react-redux";
import updateRegistrationData from "../actions/action";
import { Picker } from "@react-native-picker/picker";
import CustomPicker from "../components/CustomPicker";

const theme = darkTheme;

const Register = (props) => {
	const [regData, setRegData] = useState({
		email: "",
		username: "",
		gender: "",
		password: "",
		// phone: "",
	});
	const genderOptions = ["Male", "Female", "Others"];
	const collectEmail = (val) => {
		{
			val.length !== 0
				? setRegData({ ...regData, email: val })
				: setRegData({ ...regData, email: val });
		};
	};
	const collectPassword = (val) => {
		{
			val.length !== 0
				? setRegData({ ...regData, password: val })
				: setRegData({ ...regData, password: val })
		};
	};
	const collectGender = (val) => {
		setRegData({ ...regData, gender: val })
	};
	const collectUsername = (val) => {
		{
			val.length !== 0
				? setRegData({ ...regData, username: val })
				: setRegData({ ...regData, username: val })
		};
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === "ios" ? "padding" : null}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<View style={styles.headerContainer}>
						<Text style={styles.head1}> Create a new account </Text>
						<Text style={styles.head2}> Please fill the form to continue </Text>
					</View>
					<View style={styles.inputForm}>
						<View style={{ paddingBottom: 8 }}>
							<Input
								placeholder="Full Name"
								keyboardType="default"
								inputColor={theme.formInput}
								textColor={theme.formText}
								placeholderTextColor={theme.placeholderTextColor}
								onChangeText={(val) => collectUsername(val)}
							/>
						</View>
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
						<View style={{ paddingBottom: 8 }}>
							<PasswordInput
								placeholder="Password"
								keyboardType="default"
								inputColor={theme.formInput}
								textColor={theme.formText}
								placeholderTextColor={theme.placeholderTextColor}
								onChangeText={(val) => collectPassword(val)}
							/>
						</View>
						<View
							style={{
								paddingBottom: 8,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-start",
							}}
						>
							<CustomPicker title="Gender" options={genderOptions} onPress={(val) => {collectGender(val)} }/>
						</View>
						<View style={{ paddingBottom: 8 }}>
							<Input
								placeholder="Phone Number"
								keyboardType="numeric"
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
							text="Sign In"
							color={theme.mainTheme}
							textColor="white"
							hasImage={false}
							isLoading={props.loadingStatus}
							onPress={() => {
								console.log("Registration Data ==> ", regData)
								// props.updateUser(credentials);
								// const apiResponse = apiRequest(
								// 	"account/login",
								// 	"POST",
								// 	credentials,
								// 	props
								// );
							}}
						/>
					</View>
					<View>
						<Text style={styles.haveAccount}>
							Have an account? <Text style={styles.innerText}> Sign In</Text>
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

const mapStateToProps = (state) => {
	return {
		registrationData: state.reducers.registrationData,
		loadingStatus: state.reducers.isLoading,
		gender: state.reducers.gender
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateRegistration: (payload) => dispatch(updateRegistrationData(payload)),
		updateLoading: (value) => dispatch(updateLoadingStatus(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

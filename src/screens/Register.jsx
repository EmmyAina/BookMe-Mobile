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
import updateRegistrationData, { register } from "../actions/action";
import { useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import CustomPicker from "../components/CustomPicker";

const theme = darkTheme;

const Register = (props) => {
	const dispatch = useDispatch();
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
		}
	};
	const collectPassword = (val) => {
		{
			val.length !== 0
				? setRegData({ ...regData, password: val })
				: setRegData({ ...regData, password: val });
		}
	};
	const collectGender = (val) => {
		setRegData({ ...regData, gender: val });
	};
	const collectUsername = (val) => {
		{
			val.length !== 0
				? setRegData({ ...regData, username: val })
				: setRegData({ ...regData, username: val });
		}
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
							<CustomPicker
								title="Gender"
								options={genderOptions}
								onPress={(val) => {
									collectGender(val);
								}}
							/>
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
						}}
					>
						<MyButton
							text="Register"
							color={theme.mainTheme}
							textColor="white"
							hasImage={false}
							isLoading={props.loadingStatus}
							onPress={() => {
								dispatch(register(regData));
							}}
						/>
					</View>
					<View
						style={styles.haveAccount}
					>
						<Text style={styles.outerText}>Already have an account?</Text>
						<TouchableOpacity
							style={{
								height: 40,
								alignItems: "center",
								justifyContent: "center",
							}}
							onPress={() => props.navigation.navigate("Login")}
						>
							<Text style={styles.innerText}> Sign In</Text>
						</TouchableOpacity>
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
		paddingTop: 100,
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	outerText: {
		paddingTop: 12,
		color: theme.secondaryHeader,
	},
	innerText: {
		color: theme.mainTheme,
		paddingTop: 10,
		textAlign: "center",
	},
});

const mapStateToProps = (state) => {
	return {
		registrationData: state.reducers.registrationData,
		loadingStatus: state.reducers.isLoading,
		gender: state.reducers.gender,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateRegistration: (payload) => dispatch(updateRegistrationData(payload)),
		updateLoading: (value) => dispatch(updateLoadingStatus(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

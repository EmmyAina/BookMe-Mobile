import { Alert } from "react-native";
import { apiRequest, handleApiError} from "../helpers/api";
import {
	UPDATE_AUTH_DATA,
	LOADING,
	UPDATE_USER_DATA,
	UPDATE_REGISTRATION_DATA,
} from "../types/index";

export const updateUserData = (credentials) => ({
	type: UPDATE_USER_DATA,
	data: credentials,
});

export const updateRegistrationData = (data) => ({
	type: UPDATE_REGISTRATION_DATA,
	data: data,
});

export const updateAuthData = (response) => ({
	type: UPDATE_AUTH_DATA,
	data: response,
});

export const updateLoadingStatus = (value) => ({
	type: LOADING,
	data: value,
});

export const login = (credentials) => (dispatch) => {
	dispatch(updateLoadingStatus(true));

	apiRequest("/account/login", "POST", credentials)
		.then(({ data }) => {
			dispatch({
				type: updateAuthData,
				data: data,
			});

			Alert.alert("Success ", "Login Successful", [
				{ text: "OK", onPress: () => console.log("OK Pressed") },
			]);
		})
		.catch((err) => {
			console.log(err)
		})
		.finally(() => {
			dispatch(updateLoadingStatus(false));
		});
};

export const register = (payload) => (dispatch) => {
	dispatch(updateLoadingStatus(true));

	apiRequest("/account/signup", "POST", payload)
		.then(({ data }) => {
			console.log("Register", data);
			Alert.alert("Success", data.message, [
				{ text: "OK", onPress: () => console.log("OK Pressed") },
			]);
		})
		.catch((err) => {
			console.log(err);

		})
		.finally(() => {
			dispatch(updateLoadingStatus(false));
		});
};
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

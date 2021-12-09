import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { base_url } from "../config/constants";

export const apiRequest = async (endpoint, method, payLoad) => {
	try {
		const url = `${base_url}${endpoint}`;
		const token = null;
		const request = await axios(url, {
			data: method === "GET" ? null : { ...payLoad },
			method: method,
			headers: {
				Authorization: token ? `Bearer ${token}` : null,
				"Content-Type": "application/json",
			},
		});

		return request;
	} catch (error) {
		handleApiError(error);
	}
};

export const handleApiError = (err, title = "Error") => {
	const message =
		(err.error==undefined&&err.response.data)
			? `${
					Object.values(err.response.data)[0][0]
			  }`
			: err.response?.data?.error || err.response?.data?.error || err.message

	if (message && err.response?.status !== 401) {
		Alert.alert(title, message, [
			{ text: "Dismiss", onPress: () => console.log("OK Pressed") }
		]);
	};
};

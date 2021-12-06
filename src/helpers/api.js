import axios from "axios";
import { useState } from "react";
import { base_url } from "../config/constants";
import { Alert } from "react-native";

const apiRequest = async (endpoint, method, payLoad, props) => {
	try {
		props.updateLoading(true);
		const url = `${base_url}${endpoint}`;
		const token = null;
		const request = await axios(url, {
			data: method === "GET" ? null : { ...payLoad },
			method: method,
			headers: {
				Authorization: token ? `Bearer ${token}` : null,
				"Content-Type": "application/json",
			},
		})

		const data = request.data;
		props.updateAuthResponse(data);

    	// Alert.alert("Alert Title", "My Alert Msg", [
		// 	{
		// 		text: "Cancel",
		// 		onPress: () => console.log("Cancel Pressed"),
		// 		style: "cancel",
		// 	},
		// 	{ text: "OK", onPress: () => console.log("OK Pressed") },
		// ]);
		props.updateLoading(false);


	} catch (error) {
		console.log("I got an error ===>> ", error.message);
		props.updateLoading(false);
	}
};

export default apiRequest;

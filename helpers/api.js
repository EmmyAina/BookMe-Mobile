import axios from "axios";
import { useState } from "react";
import {base_url} from "../config/constants"

export const apiRequest = async (
	endpoint,
	method,
	payLoad,
) => {
	try {
		const [isLoading, setLoading] = useState(false)
		const url = `${base_url}${endpoint}`
		console.log(url)
		const token = null;
		setLoading(false);
		const request = await axios(
			url,
			{
				data: method === 'GET' ? null : { ...payLoad },
				method: method,
				headers: {
					Authorization: token ? `Bearer ${token}` : null,
					"Content-Type": "application/json",
				}
			}
		)
		const response = request.data
		setLoading(false)
		console.log(response)
	} catch (error) {
		console.log("I got an error ===>> ",error.message)
	}

};

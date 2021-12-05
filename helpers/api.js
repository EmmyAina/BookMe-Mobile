import axios from "axios";
import {base_url} from "../config/constants"

export const apiRequest = async (
	endpoint,
	method,
	payLoad,
) => {
	try {
		const url = `${base_url}${endpoint}`
		console.log(url)
		const token = null;
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
		console.log(response)
	} catch (error) {
		console.log("I got an error ===>> ",error)
	}

};

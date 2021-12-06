import {
	LOADING,
	UPDATE_USER_DATA,
	UPDATE_AUTH_DATA,
	UPDATE_REGISTRATION_DATA,
	UPDATE_GENDER,
} from "../types/index";

const initialState = {
	userData: {
		email: '',
		password:''
	},
	authData: {},
	isLoading: false,
	registrationData: {},
	gender: "",
}

export const reducer = (state = initialState, action ) => {
	switch (action.type) {
		case LOADING:
			return { ...state, isLoading: action.data };
		case UPDATE_USER_DATA:
			return { ...state, userData: { ...action.data } };
		case UPDATE_AUTH_DATA:
			return { ...state, authData: { ...action.data } };
		case UPDATE_REGISTRATION_DATA:
			return { ...state, registrationData: { ...action.data } };
		case UPDATE_GENDER:
			return { ...state, gender: action.data };
		default:
			return state;
	}

}
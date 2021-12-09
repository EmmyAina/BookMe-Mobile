import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Onboarding from "../screens/Onboarding";
import IntroScreen from "../screens/IntroScreen";

const AuthStack = createNativeStackNavigator();

const Auth = () => {

	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="Onboarding" component={IntroScreen} />
			<AuthStack.Screen name="Register" component={Register} />
			<AuthStack.Screen name="Login" component={Login} />
			{/* <AuthStack.Screen name="Main" component={Tabs} /> */}
		</AuthStack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "blue",
	},
});

export default Auth;

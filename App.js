import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding';
import { AppearanceProvider } from 'react-native-appearance';
// import { DefaultTheme, DarkTheme } from “@react-navigation/native”;
import Login from './screens/Login';
import Register from './screens/Register';

export default function App() {
	return (
		<AppearanceProvider>
			<View style={styles.container}>
				{/* <Text>Open up App.js to start working on your app!</Text> */}
				<StatusBar style="auto" />
				<Login />
			</View>
		</AppearanceProvider>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

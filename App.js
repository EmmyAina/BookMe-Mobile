import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/Onboarding';
import { Provider } from 'react-redux';
import configStore from './src/store/store';
// import { DefaultTheme, DarkTheme } from “@react-navigation/native”;
import Login from './src/screens/Login';
import Register from './src/screens/Register';


const store = configStore()
export default function App() {
	return (
		<Provider store={store}>
				<View style={styles.container}>
					{/* <Text>Open up App.js to start working on your app!</Text> */}
					<StatusBar style="auto" />
					<Register />
				</View>
		</Provider>
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

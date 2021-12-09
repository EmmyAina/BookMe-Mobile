import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/Onboarding';
import { Provider } from 'react-redux';
import configStore from './src/store/store';
// import { DefaultTheme, DarkTheme } from “@react-navigation/native”;
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Auth from "./src/navigation/Auth"
import { NavigationContainer } from '@react-navigation/native';
import IntroScreen from './src/screens/IntroScreen';

const store = configStore()
export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar style="inverted" />
					<Auth />
				</View>
			</Provider>
		</NavigationContainer>
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

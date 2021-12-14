import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Onboarding from './src/screens/Onboarding';
import { Provider } from 'react-redux';
import configStore from './src/store/store';
import Auth from "./src/navigation/Auth"
import MainTab from './src/navigation/MainTab';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
const store = configStore()

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar style="light" />
					{/* {Platform.OS === "ios" ? <Auth /> : <MainTab />} */}
					<MainTab />
				</View>
			</Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

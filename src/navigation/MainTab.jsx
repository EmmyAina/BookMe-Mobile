import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { darkTheme } from "../config/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const theme = darkTheme;

const TabStack = createNativeStackNavigator;
const Tab = createBottomTabNavigator();

const MainTab = () => {
	return (
		<Tab.Navigator
			initialRouteName={"Home"}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: theme.formText,
				tabBarInactiveTintColor: theme.accent,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarLabelStyle: { padding: 10, fontSize: 15 },
				tabBarStyle: {
					left: 20,
					right: 20,
					bottom: 25,
					position: "absolute",
					backgroundColor: theme.generalBackground,
					paddingTop: 10,
					elevation: 0,
					height: 60,
					borderRadius: 15,
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let routeName = route.name;

					if (routeName === "Home") {
						iconName = focused ? "home" : "home-outline";
					} else if (routeName === "Schedule") {
						iconName = focused ? "calendar" : "calendar-outline";
					} else if (routeName === "Search") {
						iconName = focused ? "search" : "search-outline";
					} else if (routeName === "Profile") {
						iconName = focused ? "person-circle" : "person-circle-outline";
					}

					return <Ionicons color={color} name={iconName} size={size} />;
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Search" component={Search} />
			<Tab.Screen name="Schedule" component={Schedule} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
};

export default MainTab;

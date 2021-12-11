import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { darkTheme } from "../config/colors";
import AppointmentCard from "../components/AppointmentCard";
import { Ionicons } from "@expo/vector-icons";

const theme = darkTheme;

const Home = () => {
	return (
		// <View style={styles.container}>
		// 	<Text style={{color: 'white'}}>
		// 		Home Screen
		// 	</Text>
		// </View>

		<View style={styles.container}>
			<View
				style={{ paddingTop: 70, flexDirection: "row", alignItems: "center" }}
			>
				<View style={styles.avatarText}>
					<Text style={{ color: "white", fontSize: 23, fontWeight:'bold' }}>
						Welcome Emmanuel 👋{" "}
					</Text>
				</View>
				<View style={styles.avatarImage}>
					<Image
						source={require("../assets/images/stck1.jpeg")}
						style={{ width: 50, height: 50, borderRadius: 100 / 2 }}
					/>
				</View>
			</View>

			<View style={styles.addNew}>
				<Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
					Book a new appointment
				</Text>
				<TouchableOpacity>
					<Ionicons color="white" name="add-circle-outline" size={50} />
				</TouchableOpacity>
			</View>

			<ScrollView style={{marginBottom:120}}>
				<AppointmentCard />
				<AppointmentCard />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.generalBackground,
	},
	avatarText: {
		marginLeft: 15,
	},
	avatarImage: {
		marginLeft: 70,
	},
	addNew: {
		marginVertical: 100,
		alignItems: 'center',
		justifyContent:'center',
	},
});

export default Home;

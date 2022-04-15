import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SvgComponent from "../components/SvgImage";
import { darkTheme, lightTheme } from "../config/colors";

const theme = darkTheme;

export const ImageSection = (props) => {
	return (
		<View>
			<View style={{ marginLeft: 0, paddingBottom: 100 }}>
				<TouchableOpacity
					style={{
						width: "105%",
						height: 220,
						// borderRadius: 50 / 6,
						flexDirection: "column",
						backgroundColor: theme.mainTheme,
					}}
					onPress={props.onPress}
					activeOpacity={1}
				>
					<View
						style={{
							paddingTop: 60,
							flexDirection: "row",
							alignItems: "center",
							paddingBottom: 20,
						}}
					>
						<Text style={styles.pData}>Settings</Text>
					</View>

					<View
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: 30,
							marginLeft: "15%",
						}}
					>
						<View style={styles.avatarImage}>
							<TouchableOpacity
								activeOpacity={1}

								// onPress={() => props.navigation.navigate("Profile")}
							>
								<View
									style={{
										top: 0,
										right: 0,
										bottom: 0,
									}}
								>
									<Image
										// source={require('../assets/images/uy1.jpg')}
										source={{
											uri: "https://mfidie.com/wp-content/uploads/2020/09/solar-panels-nigeria-min.jpg",
										}}
										// source={img}
										style={{
											width: 160,
											height: 160,
											borderRadius: 160 / 1,
											// marginLeft: 120,
										}}
									/>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.userNameContainer}>
				<Text style={styles.userName}>Aina Emmanuel</Text>
				<Text style={styles.subName}>Software Engineer</Text>
			</View>
		</View>
	);
};

export const ProfileData = (props) => {
	return (
		<>
			<View style={{ marginTop: 50, marginLeft: 20 }}>
				<View
					styles={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View>
						<Text style={styles.emailText}>
							<Ionicons name="mail" size={30} color={"white"} />
							<Text style={{ marginLeft: 50 }}>{"     "}ainae06@gmail.com</Text>
						</Text>
					</View>
				</View>
				<TouchableOpacity
					style={{
						height: 0.2,
						width: "90%",
						backgroundColor: "white",
						marginTop: 7,
					}}
				/>
			</View>

			<View style={{ marginTop: 20, marginLeft: 20 }}>
				<View
					styles={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View>
						<Text style={styles.emailText}>
							<Ionicons name="ios-call-outline" size={30} color={"white"} />
							<Text style={{ marginLeft: 50 }}>{"     "}+234-8113611262</Text>
						</Text>

						<TouchableOpacity
							style={{
								height: 0.6,
								width: "90%",
								backgroundColor: "white",
								marginTop: 7,
							}}
						/>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 20, marginLeft: 20 }}>
				<View
					styles={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View>
						<Text style={styles.emailText}>
							<Ionicons name="logo-twitter" size={30} color={"white"} />
							<Text style={{ marginLeft: 50 }}>{"     "}@aina_emmy</Text>
						</Text>

						<TouchableOpacity
							style={{
								height: 0.6,
								width: "90%",
								backgroundColor: "white",
								marginTop: 7,
							}}
						/>
					</View>
				</View>
			</View>
		</>
	);
};

const Profile = () => {
	return (
		<View style={styles.container}>
			<ImageSection color={theme.mainTheme} />
			<ProfileData />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: theme.generalBackground,
	},
	avatarImage: {
		marginLeft: 50,
		width: 175,
		height: 175,
		backgroundColor: theme.formInput,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 90 / 1,
	},
	pData: { color: "white", fontWeight: "500", fontSize: 20, marginLeft: 10 },
	emailText: { color: "white", fontWeight: "500", fontSize: 20 },

	userNameContainer: {
		display: "flex",
		// marginTop: 70,
		alignItems: "center",
	},
	userName: { color: "white", fontWeight: "500", fontSize: 35 },
	subName: { color: "white", fontWeight: "300", fontSize: 20 },

	head: {
		fontSize: 15,
		color: theme.formInput,
		marginBottom: 5,
	},
	miniCard: {
		backgroundColor: "grey",
		borderRadius: 20 / 2,
		height: 50,
	},
	detail: { flex: 1 },
	bottomLine: {
		width: "95%",
		height: 1,
		backgroundColor: "#5f6470",
		marginTop: 5,
	},
	mainInfo: { color: theme.formText, fontSize: 20 },
});

export default Profile;

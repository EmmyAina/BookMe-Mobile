import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";

const MyButton = (props) => {
	return (
		<View>
			<TouchableOpacity
				style={styles(props).getStartedButton}
				onPress={props.onPress}
			>
				<View>
					{props.hasImage == true ? (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								paddingHorizontal: 20,
							}}
						>
							<Image
								source={require("../assets/images/google.jpg")}
								style={{ width: 30, height: 30 }}
							/>
							{props.isLoading == true ? (
								<ActivityIndicator size="small" color="white" />
							) : (
								<Text style={{ fontSize: 20, color: props.textColor }}>
									{props.text}
								</Text>
							)}
						</View>
					) : (
						<View>
							{props.isLoading == true ? (
								<ActivityIndicator size="small" color="white" />
							) : (
								<Text style={{ fontSize: 20, color: props.textColor }}>
									{props.text}
								</Text>
							)}
						</View>
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = (props) =>
	StyleSheet.create({
		getStartedButton: {
			backgroundColor: props.color,
			height: 60,
			width: 320,
			borderRadius: 100 / 6,
			justifyContent: "center",
			alignItems: "center",
			marginVertical: 7,
		},
	});

export default MyButton;

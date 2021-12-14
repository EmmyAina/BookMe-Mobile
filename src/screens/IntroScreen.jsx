import React, { useState } from "react";
import {
	Dimensions,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	View,
	PixelRatio,
	StyleSheet,
	Image,
	TouchableOpacity,
	Platform
} from "react-native";
import MyButton from "../components/MyButton";
import { darkTheme } from "../config/colors";

const theme = darkTheme;

const IntroScreen = (props, { navigation }) => {
	const [sliderState, setSliderState] = useState({ currentPage: 0 });
	const { width, height } = Dimensions.get("window");

	const setSliderPage = (event: any) => {
		const { currentPage } = sliderState;
		const { x } = event.nativeEvent.contentOffset;
		const indexOfNextScreen = Math.floor(x / width);
		if (indexOfNextScreen !== currentPage) {
			setSliderState({
				...sliderState,
				currentPage: indexOfNextScreen,
			});
		}
	};

	const { currentPage: pageIndex } = sliderState;

	return (
		<>
			{/* <StatusBar barStyle="dark-content" /> */}
			<SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
				<ScrollView
					style={{ flex: 1 }}
					horizontal={true}
					scrollEventThrottle={16}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					onScroll={(event: any) => {
						setSliderPage(event);
					}}
				>
					<View style={{ width, height }}>
						<Image
							source={require("../assets/images/1.png")}
							style={styles.imageStyle}
						/>
						<View style={styles.wrapper}>
							<Text style={styles.header}>Nature Imitates Art</Text>
							<Text style={styles.paragraph}>....something like that</Text>
						</View>
					</View>
					<View style={{ width, height }}>
						<Image
							source={require("../assets/images/2.png")}
							style={styles.imageStyle}
						/>
						<View style={styles.wrapper}>
							<Text style={styles.header}>High quality Art work</Text>
							<Text style={styles.paragraph}>
								... for a fraction of the price
							</Text>
						</View>
					</View>
					<View style={{ width, height }}>
						<Image
							source={require("../assets/images/stck1.jpeg")}
							style={styles.imageStyle}
						/>
						<View style={styles.wrapper}>
							<Text style={styles.header}>Top Notch Artists</Text>
							<Text style={styles.paragraph}>... all in one place</Text>
						</View>
					</View>
					{/* <View style={{ width, height }}>
						<Image
							source={require("../assets/images/1.png")}
							style={styles.imageStyle}
						/>
						<View style={styles.wrapper}>
							<Text style={styles.header}>Best deal on the market</Text>
							<Text style={styles.paragraph}>... let's find your next art</Text>
						</View>
					</View>
					<View style={{ width, height }}>
						<Image
							source={require("../assets/images/1.png")}
							style={styles.imageStyle}
						/>
						<View style={styles.wrapper}>
							<Text style={styles.header}>It's all about art</Text>
							<Text style={styles.paragraph}>... seriously, it is</Text>
						</View>
					</View> */}
				</ScrollView>
				<View style={styles.paginationWrapper}>
					{Array.from(Array(3).keys()).map((key, index) => (
						<View
							style={[
								styles.paginationDots,
								{ opacity: pageIndex === index ? 1 : 0.2 },
							]}
							key={index}
						/>
					))}
				</View>
				<View style={styles.buttonAndText}>
					<View style={styles.buttonContainer}>
						<MyButton
							text="Get Started"
							color={theme.mainTheme}
							textColor={theme.formText}
							onPress={() => props.navigation.navigate("Login")}
						/>
					</View>
					<View style={styles.haveAccount}>
						<Text style={styles.outerText}>Already have an account?</Text>
						<TouchableOpacity
							style={{
								height: 40,
								alignItems: "center",
								justifyContent: "center",
							}}
							onPress={() => props.navigation.navigate("Login")}
						>
							<Text style={styles.innerText}> Sign In</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	// imageStyle: {
	// 	height: PixelRatio.getPixelSizeForLayoutSize(130),
	// 	width: "100%",
	// },
	imageStyle: {
		height: (Platform.OS == "ios") ? PixelRatio.getPixelSizeForLayoutSize(130) : PixelRatio.getPixelSizeForLayoutSize(250),
		width: "100%",
	},
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 30,
	},
	header: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 20,
		color: "white",
	},
	paragraph: {
		fontSize: 17,
		color: "white",
	},
	paginationWrapper: {
		position: "absolute",
		bottom: 250,
		left: 0,
		right: 0,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	paginationDots: {
		height: 10,
		width: 10,
		borderRadius: 10 / 2,
		backgroundColor: theme.mainTheme,
		marginLeft: 10,
	},
	buttonContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	haveAccount: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	outerText: {
		paddingTop: 12,
		color: theme.secondaryHeader,
	},
	innerText: {
		color: theme.mainTheme,
		paddingTop: 10,
		textAlign: "center",
	},
	buttonAndText: {
		marginBottom: 50,
	},
});

export default IntroScreen;

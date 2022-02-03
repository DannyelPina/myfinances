import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-CV";

import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";

import Theme from "./src/global/styles/theme";

import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ThemeProvider theme={Theme}>
				<NavigationContainer>
					<AppRoutes />
				</NavigationContainer>
			</ThemeProvider>
		);
	}
}

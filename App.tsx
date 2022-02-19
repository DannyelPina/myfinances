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
import { StatusBar } from "react-native";

import { SignIn } from "./src/screens/SignIn";
import { AuthProvider } from "./src/hooks/auth";
import { Routes } from "./src/routes";
import { useAuth } from "./src/hooks/auth";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	const { userStoredLoading } = useAuth();

	if (!fontsLoaded || userStoredLoading) {
		return <AppLoading />;
	} else {
		return (
			<ThemeProvider theme={Theme}>
				<StatusBar
					backgroundColor="#5636D3"
					barStyle="light-content"
					translucent
				/>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</ThemeProvider>
		);
	}
}

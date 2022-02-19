import React, { useContext, useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";

import {
	Container,
	Footer,
	FooterWrapper,
	Header,
	SignInTitle,
	Title,
	TitleWrapper,
} from "./styles";

export const SignIn = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { signInWithGoogle, signInWithApple } = useAuth();
	const theme = useTheme();

	async function handleSignInWithGoogle() {
		if (isLoading) {
			return;
		}
		try {
			setIsLoading(true);
			return await signInWithGoogle();
		} catch (error) {
			console.log(error);
			Alert.alert("Nao foi possivel conetar a conta Google");
			setIsLoading(false);
		}
	}

	async function handleSignInWithApple() {
		if (isLoading) {
			return;
		}
		try {
			setIsLoading(true);
			return await signInWithApple();
		} catch (error) {
			console.log(error);
			Alert.alert("Nao foi possivel conetar a conta Apple");
			setIsLoading(false);
		}
	}

	return (
		<Container>
			<Header>
				<TitleWrapper>
					<LogoSvg width={RFValue(200)} height={RFValue(200)} />

					<Title>
						Controla suas {"\n"}finacas de forma {"\n"}muito simples
					</Title>
				</TitleWrapper>

				<SignInTitle>
					Faca o seu login com {"\n"}uma das contas abaixo
				</SignInTitle>
			</Header>

			<Footer>
				<FooterWrapper>
					<SignInSocialButton
						title="Entrar com Google"
						svg={GoogleSvg}
						onPress={() => handleSignInWithGoogle()}
					/>
					{Platform.OS === "ios" && (
						<SignInSocialButton
							title="Entrar com Apple"
							svg={AppleSvg}
							onPress={handleSignInWithApple}
						/>
					)}
				</FooterWrapper>

				{isLoading && (
					<ActivityIndicator
						color={theme.colors.shape}
						size="large"
						style={{ marginTop: 18 }}
					/>
				)}
			</Footer>
		</Container>
	);
};

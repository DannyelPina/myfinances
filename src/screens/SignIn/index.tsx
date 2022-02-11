import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";

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
	const auth = useAuth();
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
					/>
					<SignInSocialButton
						title="Entrar com Apple"
						svg={AppleSvg}
					/>
				</FooterWrapper>
			</Footer>
		</Container>
	);
};

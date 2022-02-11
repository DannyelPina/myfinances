import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	width: 100%;
	height: 70%;

	background-color: ${({ theme }) => theme.colors.primary};

	justify-content: flex-end;
	align-items: center;
`;

export const TitleWrapper = styled.View`
	align-items: center;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.medium};
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(30)}px;

	text-align: center;

	margin-top: ${RFValue(20)}px;
`;

export const SignInTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(14)}px;

	text-align: center;

	margin-top: ${RFValue(35)}px;
	margin-bottom: ${RFValue(45)}px;
`;

export const Footer = styled.View`
	width: 100%;
	height: 30%;

	background-color: ${({ theme }) => theme.colors.secundary};
`;

export const FooterWrapper = styled.View`
	margin-top: ${RFValue(-28)}px;

	padding: 0 ${RFValue(32)}px;
`;

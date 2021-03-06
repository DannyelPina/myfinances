import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { TransactionProps } from "./interfaces";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.shape};
	border-radius: ${RFValue(5)}px;

	padding: ${RFValue(17)}px ${RFValue(24)}px;
	margin-bottom: ${RFValue(8)}px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.title};
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text<TransactionProps>`
	color: ${({ theme, type }) =>
		type === "up" ? theme.colors.sucess : theme.colors.attention};
	font-size: ${RFValue(20)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-top: ${RFValue(2)}px;
`;

export const Footer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${RFValue(8)}px;
`;

export const Category = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(Feather)`
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	margin-left: ${RFValue(8)}px;
`;

export const Date = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;

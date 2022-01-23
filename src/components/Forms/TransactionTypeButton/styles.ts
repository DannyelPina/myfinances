import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

import { IconProps, TransactionTypeButtonProps } from "./interfaces";

export const Container = styled(TouchableOpacity)<TransactionTypeButtonProps>`
	width: 48%;

	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-width: ${({ isActive }) => (isActive ? 0 : 1)}px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.text};
	border-radius: ${RFValue(5)}px;

	padding: ${RFValue(12)}px ${RFValue(24)}px;

	${({ isActive, type }) =>
		isActive &&
		type === "up" &&
		css`
			background-color: ${({ theme }) => theme.colors.sucess_light};
		`}

	${({ isActive, type }) =>
		isActive &&
		type === "down" &&
		css`
			background-color: ${({ theme }) => theme.colors.attention_light};
		`}
`;

export const Icon = styled(Feather)<IconProps>`
	font-size: ${RFValue(24)}px;
	margin-right: ${RFValue(8)}px;

	color: ${({ theme, type }) =>
		type === "up" ? theme.colors.sucess : theme.colors.attention};
`;

export const Title = styled.Text`
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`;

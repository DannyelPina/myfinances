import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActiveCategoryProps } from "./interfaces";

export const Container = styled(GestureHandlerRootView)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(68)}px;

	background-color: ${({ theme }) => theme.colors.primary};

	align-items: center;
	justify-content: flex-end;
	padding-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.TouchableOpacity<ActiveCategoryProps>`
	width: 100%;
	padding: ${RFValue(16)}px;

	flex-direction: row;
	align-items: center;

	background-color: ${({ isActive, theme }) =>
		isActive ? theme.colors.secundary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
	color: ${({ theme }) => theme.colors.title};
	font-size: ${RFValue(20)}px;
	margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
	color: ${({ theme }) => theme.colors.title};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
	height: 1px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
	width: 100%;
	padding: ${RFValue(24)}px;
`;

import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton).attrs({
	activeOpacity: 0.7,
})`
	background-color: ${({ theme }) => theme.colors.shape};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: ${RFValue(5)}px;
	padding: ${RFValue(12)}px;
	margin-top: ${RFValue(8)}px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text};
`;

import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
	width: 100%;

	padding: ${RFValue(14)}px;

	background-color: ${({ theme }) => theme.colors.secundary};
	border-radius: ${RFValue(5)}px;
	align-items: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.shape};

	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.medium};
`;

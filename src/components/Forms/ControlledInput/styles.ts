import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
	width: 100%;
`;

export const Error = styled.Text`
	width: 100%;
	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.attention};
	margin-bottom: ${RFValue(8)}px;
`;

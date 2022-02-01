import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
	background-color: ${({ theme }) => theme.colors.primary};

	width: 100%;
	height: ${RFValue(100)}px;

	justify-content: flex-end;
	align-items: center;
	padding-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
	flex: 1;
	width: 100%;
	padding: ${RFValue(24)}px;

	justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionsType = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-top: ${RFValue(8)}px;
	margin-bottom: ${RFValue(8)}px;
`;

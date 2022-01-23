import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Platform, FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
	getBottomSpace,
	getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { DataListProps } from "./interfaces";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFPercentage(42)}px;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
	width: 100%;
	padding: 0 24px;
	margin-top: ${Platform.OS === "ios"
		? getStatusBarHeight() + RFValue(28)
		: RFValue(48)}px;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const UserInfo = styled.View`
	flex-direction: row;
`;

export const Photo = styled.Image`
	width: ${RFValue(55)}px;
	height: ${RFValue(55)}px;
	border-radius: ${RFValue(10)}px;
`;

export const User = styled.View`
	margin-left: 17px;
`;

export const UserGreeting = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogOutIcon = styled(Feather)`
	color: ${({ theme }) => theme.colors.secundary};
	font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: { paddingHorizontal: 16 },
})`
	width: 100%;
	position: absolute;
	margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
	flex: 1;
	padding: 0 24px;
	margin-top: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.title};
	margin-bottom: ${RFValue(8)}px;
`;

export const TransactionsList = styled(
	FlatList as new (
		props: FlatListProps<DataListProps>
	) => FlatList<DataListProps>
).attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		paddingBottom: Platform.OS === "ios" ? getBottomSpace() : RFValue(8),
	},
})``;

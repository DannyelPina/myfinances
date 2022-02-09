import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
	BorderlessButton,
	GestureHandlerRootView,
} from "react-native-gesture-handler";
import { FlatList } from "react-native";
import { FlatListProps } from "react-native";
import { TotalCategoprySumProps } from "./interfaces";
import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Feather } from "@expo/vector-icons";

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

export const ChartConatiner = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const MonthSelect = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Feather)`
	font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(20)}px;
`;

export const TotalByCategoriesList = styled(
	FlatList as new (
		props: FlatListProps<TotalCategoprySumProps>
	) => FlatList<TotalCategoprySumProps>
).attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		padding: 24,
		paddingBottom: Platform.OS === "ios" ? getBottomSpace() : RFValue(8),
	},
})``;

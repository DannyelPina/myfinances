import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { HistoryCard } from "../../components/HistoryCard";
import {
	ChartConatiner,
	Container,
	Header,
	Month,
	MonthSelect,
	MonthSelectButton,
	MonthSelectIcon,
	Title,
	TotalByCategoriesList,
} from "./styles";
import { DataListProps } from "../Dashboard/interfaces";
import { categories } from "../../utils/categories";
import { TotalCategoprySumProps } from "./interfaces";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { addMonths, subMonths, format } from "date-fns";
import { pt } from "date-fns/locale";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const Resume = () => {
	const theme = useTheme();
	const [loading, setLoading] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [totalByCategories, setTotalByCategories] = useState<
		TotalCategoprySumProps[]
	>([]);

	const handleDateChange = (action: "next" | "prev") => {
		if (action === "next") {
			const newDate = addMonths(selectedDate, 1);
			setSelectedDate(newDate);
		} else {
			const newDate = subMonths(selectedDate, 1);
			setSelectedDate(newDate);
		}
	};
	const loadData = async () => {
		setLoading(true);
		const dataKey = "@myfinances:transactions";

		const response = await AsyncStorage.getItem(dataKey);
		const responseFormatted: DataListProps[] = response
			? JSON.parse(response)
			: [];

		const outComes = responseFormatted.filter(
			(transaction) =>
				transaction.type === "down" &&
				new Date(transaction.date).getMonth() ===
					selectedDate.getMonth() &&
				new Date(transaction.date).getFullYear() ===
					selectedDate.getFullYear()
		);

		const outComeTotal = outComes.reduce(
			(acumullator: number, outcome: DataListProps) => {
				return acumullator + Number(outcome.amount);
			},
			0
		);

		const totalCategory: TotalCategoprySumProps[] = [];
		categories.forEach((category) => {
			let categorySum = 0;

			outComes.forEach((item) => {
				if (item.category === category.key) {
					categorySum += Number(item.amount);
				}
			});

			if (categorySum) {
				const total = categorySum.toLocaleString("pt-CV", {
					style: "currency",
					currency: "ECV",
				});

				const percentage = `${(
					(categorySum / outComeTotal) *
					100
				).toFixed(0)}%`;
				totalCategory.push({
					id: category.key,
					color: category.color,
					name: category.name,
					total,
					percent: percentage,
				});
			}
		});

		setTotalByCategories(totalCategory);
		setLoading(false);
	};

	useFocusEffect(
		useCallback(() => {
			loadData();
		}, [selectedDate])
	);
	return (
		<Container>
			<Header>
				<Title>Resumo por categoria</Title>
			</Header>

			{loading ? (
				<ActivityIndicator size={36} color={theme.colors.text} />
			) : (
				<TotalByCategoriesList
					data={totalByCategories}
					keyExtractor={(item) => item.id}
					ListHeaderComponent={
						<ChartConatiner>
							<MonthSelect>
								<MonthSelectButton
									onPress={() => handleDateChange("prev")}
								>
									<MonthSelectIcon name="chevron-left" />
								</MonthSelectButton>

								<Month>
									{format(selectedDate, "MMMM, yyyy", {
										locale: pt,
									})}
								</Month>

								<MonthSelectButton
									onPress={() => handleDateChange("next")}
								>
									<MonthSelectIcon name="chevron-right" />
								</MonthSelectButton>
							</MonthSelect>
							<VictoryPie
								data={totalByCategories}
								colorScale={totalByCategories.map(
									(category) => category.color
								)}
								style={{
									labels: {
										fontSize: RFValue(18),
										fontWeight: "bold",
										fill: theme.colors.shape,
									},
								}}
								labelRadius={60}
								x="percent"
								y="total"
							/>
						</ChartConatiner>
					}
					ListHeaderComponentStyle={{
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
					renderItem={({ item }) => (
						<HistoryCard
							title={item.name}
							amount={item.total}
							color={item.color}
						/>
					)}
				/>
			)}
		</Container>
	);
};

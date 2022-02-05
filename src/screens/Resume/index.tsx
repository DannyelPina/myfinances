import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { HistoryCard } from "../../components/HistoryCard";
import { Container, Header, Title, TotalByCategoriesList } from "./styles";
import { DataListProps } from "../Dashboard/interfaces";
import { categories } from "../../utils/categories";
import { TotalCategoprySumProps } from "./interfaces";

export const Resume = () => {
	const [totalByCategories, setTotalByCategories] = useState<
		TotalCategoprySumProps[]
	>([]);
	const loadData = async () => {
		const dataKey = "@myfinances:transactions";

		const response = await AsyncStorage.getItem(dataKey);
		const responseFormatted: DataListProps[] = response
			? JSON.parse(response)
			: [];

		const outCome = responseFormatted.filter(
			(transaction) => transaction.type === "down"
		);

		const totalCategory: TotalCategoprySumProps[] = [];
		categories.forEach((category) => {
			let categorySum = 0;

			outCome.forEach((item) => {
				if (item.category === category.key) {
					categorySum += Number(item.amount);
				}
			});

			if (categorySum) {
				const total = categorySum.toLocaleString("pt-CV", {
					style: "currency",
					currency: "ECV",
				});
				totalCategory.push({
					id: category.key,
					color: category.color,
					name: category.name,
					total,
				});
			}
		});

		if (totalCategory.length) {
			setTotalByCategories(totalCategory);
		}
	};

	useEffect(() => {
		loadData();
	}, []);
	return (
		<Container>
			<Header>
				<Title>Resumo por categoria</Title>
			</Header>

			<TotalByCategoriesList
				data={totalByCategories}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={
					<VictoryPie
						data={[
							{ x: "Cats", y: 35 },
							{ x: "Dogs", y: 40 },
							{ x: "Birds", y: 55 },
						]}
					/>
				}
				renderItem={({ item }) => (
					<HistoryCard
						title={item.name}
						amount={item.total}
						color={item.color}
					/>
				)}
			/>
		</Container>
	);
};

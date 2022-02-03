import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import { DataListProps } from "./interfaces";

import {
	Container,
	Header,
	LogOutIcon,
	Photo,
	User,
	UserGreeting,
	UserInfo,
	UserName,
	UserWrapper,
	HighlightCards,
	Transactions,
	Title,
	TransactionsList,
	LogOutButton,
} from "./styles";

export const Dashboard = () => {
	const [data, setData] = useState<DataListProps[]>([]);

	const loadTransaction = async () => {
		const dataKey = "@myfinances:transactions";

		const response = await AsyncStorage.getItem(dataKey);
		const transactions = response ? JSON.parse(response) : [];

		const transactionsFormatted: DataListProps[] = transactions.map(
			(item: DataListProps) => {
				const amount = Number(item.amount).toLocaleString("pt-CV", {
					style: "currency",
					currency: "ECV",
				});
				const dateFormatted = Intl.DateTimeFormat("pt-CV").format(
					new Date(item.date)
				);

				return {
					...item,
					amount,
					date: dateFormatted,
				};
			}
		);

		setData(transactionsFormatted);
	};

	useEffect(() => {
		loadTransaction();
	}, []);

	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo
							source={{
								uri: "https://avatars.githubusercontent.com/u/25164242?v=4",
							}}
						/>
						<User>
							<UserGreeting>Ola,</UserGreeting>
							<UserName>Nataniel</UserName>
						</User>
					</UserInfo>
					<LogOutButton>
						<LogOutIcon name="power" />
					</LogOutButton>
				</UserWrapper>
			</Header>

			<HighlightCards>
				<HighlightCard
					type="up"
					title="Entrada"
					amount="ECV 17.400,00"
					lastTransation="Ultima entrada em 15 de janeiro"
				/>
				<HighlightCard
					type="down"
					title="Saida"
					amount="ECV 1000,00"
					lastTransation="Ultima saida em 20 de janeiro"
				/>
				<HighlightCard
					type="total"
					title="Total"
					amount="ECV 16.400,00"
					lastTransation="De 1 a 23 de janeiro"
				/>
			</HighlightCards>

			<Transactions>
				<Title>Listagem</Title>

				<TransactionsList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <TransactionCard data={item} />}
				/>
			</Transactions>
		</Container>
	);
};

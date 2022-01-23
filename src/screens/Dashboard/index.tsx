import React from "react";

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
} from "./styles";

export const Dashboard = () => {
	const data: DataListProps[] = [
		{
			id: "1",
			type: "positive",
			title: "Desenvolvimento",
			amount: "ECV 4.000,00",
			category: { name: "Venda", icon: "dollar-sign" },
			date: "23/01/2022",
		},

		{
			id: "2",
			type: "negative",
			title: "Desenvolvimento",
			amount: "ECV 4.000,00",
			category: { name: "Alimentacao", icon: "coffee" },
			date: "23/01/2022",
		},
		{
			id: "3",
			type: "negative",
			title: "Desenvolvimento",
			amount: "ECV 4.000,00",
			category: { name: "Casa", icon: "home" },
			date: "23/01/2022",
		},
	];

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
					<LogOutIcon name="power" />
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

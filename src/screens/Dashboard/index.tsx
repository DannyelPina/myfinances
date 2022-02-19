import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import { DataListProps, HighlightCardDataProps } from "./interfaces";

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
	LoadingContainer,
} from "./styles";
import { useAuth } from "../../hooks/auth";

export const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<DataListProps[]>([]);
	const [highlightCardData, setHighlightCardData] =
		useState<HighlightCardDataProps>({} as HighlightCardDataProps);

	const theme = useTheme();
	const { signOut, user } = useAuth();

	const getLastTransactionDate = (
		transactions: DataListProps[],
		type: "up" | "down"
	) => {
		const transactionsFiltered = transactions.filter(
			(item) => item.type === type
		);
		if (!transactionsFiltered.length) {
			return 0;
		}
		const lastTransactionDate = new Date(
			Math.max.apply(
				Math,
				transactionsFiltered.map((item) =>
					new Date(item.date).getTime()
				)
			)
		);
		return `${lastTransactionDate.getDate()} de ${lastTransactionDate.toLocaleString(
			"pt-CV",
			{ month: "long" }
		)}`;
	};

	const loadTransaction = async () => {
		const dataKey = `@myfinances:transactions_user:${user.id}`;

		const response = await AsyncStorage.getItem(dataKey);
		const transactions: DataListProps[] = response
			? JSON.parse(response)
			: [];

		let inComeSum = 0;
		let outComeSum = 0;
		const transactionsFormatted: DataListProps[] = transactions.map(
			(item: DataListProps) => {
				if (item.type === "up") {
					inComeSum += Number(item.amount);
				} else {
					outComeSum += Number(item.amount);
				}

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

		const lastInComeTransaction = getLastTransactionDate(
			transactions,
			"up"
		);
		const lastOutComeTransaction = getLastTransactionDate(
			transactions,
			"down"
		);
		const totalInterval = lastOutComeTransaction
			? `01 a ${lastOutComeTransaction}`
			: "Nenhuma transacao";

		const total = inComeSum - outComeSum;
		setHighlightCardData({
			inComeSum: {
				amount: inComeSum.toLocaleString("pt-CV", {
					style: "currency",
					currency: "ECV",
				}),
				lastTransaction: lastInComeTransaction
					? `Ultima entrada em ${lastInComeTransaction}`
					: "Nenhuma entrada",
			},
			outComeSum: {
				amount: outComeSum.toLocaleString("pt-CV", {
					style: "currency",
					currency: "ECV",
				}),
				lastTransaction: lastOutComeTransaction
					? `Ultima saida em ${lastOutComeTransaction}`
					: "Nenhuma saida",
			},
			total: {
				amount: total.toLocaleString("pt-CV", {
					style: "currency",
					currency: "ECV",
				}),
				lastTransaction: totalInterval,
			},
		});
		setData(transactionsFormatted);
		setIsLoading(false);
	};

	useFocusEffect(
		useCallback(() => {
			loadTransaction();
		}, [])
	);

	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo
							source={{
								uri: user.photo,
							}}
						/>
						<User>
							<UserGreeting>Ola,</UserGreeting>
							<UserName>{user.name}</UserName>
						</User>
					</UserInfo>
					<LogOutButton onPress={signOut}>
						<LogOutIcon name="power" />
					</LogOutButton>
				</UserWrapper>
			</Header>

			{isLoading ? (
				<LoadingContainer>
					<ActivityIndicator color={theme.colors.text} size="large" />
				</LoadingContainer>
			) : (
				<>
					<HighlightCards>
						<HighlightCard
							type="up"
							title="Entrada"
							amount={highlightCardData?.inComeSum?.amount}
							lastTransation={
								highlightCardData?.inComeSum?.lastTransaction
							}
						/>
						<HighlightCard
							type="down"
							title="Saida"
							amount={highlightCardData?.outComeSum?.amount}
							lastTransation={
								highlightCardData?.outComeSum?.lastTransaction
							}
						/>
						<HighlightCard
							type="total"
							title="Total"
							amount={highlightCardData?.total?.amount}
							lastTransation={
								highlightCardData?.total?.lastTransaction
							}
						/>
					</HighlightCards>

					<Transactions>
						<Title>Listagem</Title>

						<TransactionsList
							data={data}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => (
								<TransactionCard data={item} />
							)}
						/>
					</Transactions>
				</>
			)}
		</Container>
	);
};

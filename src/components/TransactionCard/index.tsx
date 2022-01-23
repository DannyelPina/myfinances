import React from "react";

import { TransactionCardProps } from "./interfaces";

import {
	Amount,
	Category,
	CategoryName,
	Container,
	Date,
	Footer,
	Icon,
	Title,
} from "./styles";

export const TransactionCard = ({ data }: TransactionCardProps) => {
	return (
		<Container>
			<Title>{data.title}</Title>
			<Amount type={data.type}>
				{data.type === "negative" && "- "}
				{data.amount}
			</Amount>
			<Footer>
				<Category>
					<Icon name={data.category.icon}></Icon>
					<CategoryName>{data.category.name}</CategoryName>
				</Category>
				<Date>{data.date}</Date>
			</Footer>
		</Container>
	);
};

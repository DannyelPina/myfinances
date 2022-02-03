import React from "react";
import { categories } from "../../utils/categories";

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
	const category = categories.find((item) => (item.key = data.category));
	return (
		<Container>
			<Title>{data.name}</Title>
			<Amount type={data.type}>
				{data.type === "down" && "- "}
				{data.amount}
			</Amount>
			<Footer>
				<Category>
					<Icon name={category?.icon}></Icon>
					<CategoryName>{category?.name}</CategoryName>
				</Category>
				<Date>{data.date}</Date>
			</Footer>
		</Container>
	);
};

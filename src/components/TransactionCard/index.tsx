import React from "react";

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

export const TransactionCard = () => {
	return (
		<Container>
			<Title>Desenvolvimento</Title>
			<Amount>ECV 4000,00</Amount>
			<Footer>
				<Category>
					<Icon name="dollar-sign"></Icon>
					<CategoryName>Vendas</CategoryName>
				</Category>
				<Date>23 / 01 / 2022</Date>
			</Footer>
		</Container>
	);
};

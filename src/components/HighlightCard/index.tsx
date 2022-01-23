import React from "react";

import {
	Amount,
	Container,
	Footer,
	Header,
	Icon,
	LastTransation,
	Title,
} from "./styles";

import { HighlightCardProps } from "./interfaces";

const icon = {
	up: "arrow-up-circle",
	down: "arrow-down-circle",
	total: "dollar-sign",
};

export const HighlightCard = ({
	title,
	amount,
	lastTransation,
	type,
}: HighlightCardProps) => {
	return (
		<Container type={type}>
			<Header>
				<Title type={type}>{title}</Title>
				<Icon name={icon[type]} type={type} />
			</Header>
			<Footer>
				<Amount type={type}>{amount}</Amount>
				<LastTransation type={type}>{lastTransation}</LastTransation>
			</Footer>
		</Container>
	);
};

import React from "react";
import { ResumeProps } from "./interfaces";
import { Amount, Container, Title } from "./styles";

export const HistoryCard = ({ title, amount, color }: ResumeProps) => {
	return (
		<Container color={color}>
			<Title>{title}</Title>
			<Amount>{amount}</Amount>
		</Container>
	);
};

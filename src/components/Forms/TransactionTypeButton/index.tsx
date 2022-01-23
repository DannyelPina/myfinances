import React from "react";

import { TransactionTypeButtonProps } from "./interfaces";

import { Container, Icon, Title } from "./styles";

const icons = {
	up: "arrow-up-circle",
	down: "arrow-down-circle",
};

export const TransactionTypeButton = ({
	title,
	type,
	isActive,
	...rest
}: TransactionTypeButtonProps) => {
	return (
		<Container isActive={isActive} type={type} {...rest}>
			<Icon name={icons[type]} type={type} />
			<Title>{title}</Title>
		</Container>
	);
};

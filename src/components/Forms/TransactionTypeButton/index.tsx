import React from "react";

import { TransactionTypeButtonProps } from "./interfaces";

import { Button, Container, Icon, Title } from "./styles";

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
		<Container isActive={isActive} type={type}>
			<Button {...rest}>
				<Icon name={icons[type]} type={type} />
				<Title>{title}</Title>
			</Button>
		</Container>
	);
};

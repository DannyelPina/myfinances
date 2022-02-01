import React from "react";

import { ButtonPropos } from "./interfaces";

import { Container, Title } from "./styles";

export const Button = ({ title, onPress, ...rest }: ButtonPropos) => {
	return (
		<Container onPress={onPress} {...rest}>
			<Title>{title}</Title>
		</Container>
	);
};

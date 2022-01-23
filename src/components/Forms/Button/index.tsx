import React from "react";

import { ButtonPropos } from "./interfaces";

import { Container, Title } from "./styles";

export const Button = ({ title, ...rest }: ButtonPropos) => {
	return (
		<Container {...rest}>
			<Title>{title}</Title>
		</Container>
	);
};

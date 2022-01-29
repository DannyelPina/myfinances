import React from "react";
import { Container, Icon, Title } from "./styles";
import { SelectProps } from "./interfaces";

export const Select = ({ title }: SelectProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Icon name="chevron-down" />
		</Container>
	);
};

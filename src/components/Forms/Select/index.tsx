import React from "react";
import { Container, Icon, Title } from "./styles";
import { SelectProps } from "./interfaces";

export const Select = ({ title, onPress }: SelectProps) => {
	return (
		<Container onPress={onPress}>
			<Title>{title}</Title>
			<Icon name="chevron-down" />
		</Container>
	);
};

import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "../Input";
import { ControlledInputProps } from "./interfaces";
import { Container } from "./styles";

export const ControlledInput = ({
	control,
	name,
	...rest
}: ControlledInputProps) => {
	return (
		<Container>
			<Controller
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input onChangeText={onChange} value={value} {...rest} />
				)}
				name={name}
			/>
		</Container>
	);
};

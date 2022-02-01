import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "../Input";
import { ControlledInputProps } from "./interfaces";
import { Container, Error } from "./styles";

export const ControlledInput = ({
	control,
	name,
	error,
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
			{error && <Error>{error}</Error>}
		</Container>
	);
};

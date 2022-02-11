import React from "react";
import { SignInSocialButtonProps } from "./interfaces";
import { Button, ImageConatiner, Text } from "./styles";

export const SignInSocialButton = ({
	title,
	svg: Svg,
	...rest
}: SignInSocialButtonProps) => {
	return (
		<Button {...rest}>
			<ImageConatiner>
				<Svg />
			</ImageConatiner>

			<Text>{title}</Text>
		</Button>
	);
};

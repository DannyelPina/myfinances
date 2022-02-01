import { RectButtonProps } from "react-native-gesture-handler";

export interface TransactionTypeButtonProps extends RectButtonProps {
	title?: string;
	type: "up" | "down";
	isActive: boolean;
}

export interface IconProps {
	type: "up" | "down";
}

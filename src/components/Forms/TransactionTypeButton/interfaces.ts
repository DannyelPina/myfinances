import { TouchableOpacityProps } from "react-native";

export interface TransactionTypeButtonProps extends TouchableOpacityProps {
	title?: string;
	type: "up" | "down";
	isActive: boolean;
}

export interface IconProps {
	type: "up" | "down";
}

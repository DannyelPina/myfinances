import { TextInputProps } from "react-native";
import { Control } from "react-hook-form";

export interface ControlledInputProps extends TextInputProps {
	control: Control;
	name: string;
}

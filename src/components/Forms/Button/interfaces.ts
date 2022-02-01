import { RectButtonProps } from "react-native-gesture-handler";

export interface ButtonPropos extends RectButtonProps {
	title: string;
	onPress: () => void;
}

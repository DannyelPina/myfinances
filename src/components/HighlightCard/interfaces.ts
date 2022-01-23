export interface HighlightCardProps {
	title: string;
	amount: string;
	lastTransation: string;
	type: "up" | "down" | "total";
}

export interface TypeProps {
	type: "up" | "down" | "total";
}

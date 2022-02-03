export interface TransactionCardProps {
	data: DataProps;
}

export interface TransactionProps {
	type: "up" | "down";
}

export interface DataProps {
	type: "up" | "down";
	name: string;
	amount: string;
	category: string;
	date: string;
}

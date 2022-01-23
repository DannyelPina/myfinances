export interface CategoryProps {
	name: string;
	icon: string;
}

export interface TransactionCardProps {
	data: DataProps;
}

export interface TransactionProps {
	type: "positive" | "negative";
}

export interface DataProps {
	type: "positive" | "negative";
	title: string;
	amount: string;
	category: CategoryProps;
	date: string;
}

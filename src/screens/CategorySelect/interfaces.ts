interface CategoryProps {
	key: string;
	name: string;
}

export interface CategorySelectProps {
	category: CategoryProps;
	setCategory: (name: string) => void;
	closeSelectCategory: () => void;
}

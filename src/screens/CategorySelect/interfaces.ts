export interface CategoryProps {
	key: string;
	name: string;
}

export interface CategorySelectProps {
	category: CategoryProps;
	setCategory: (category: CategoryProps) => void;
	closeSelectCategory: () => void;
}

export interface ActiveCategoryProps {
	isActive: boolean;
}

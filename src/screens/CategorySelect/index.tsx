import React from "react";
import {
	Container,
	Header,
	Title,
	Category,
	Icon,
	Name,
	Separator,
	Footer,
} from "./styles";
import { CategoryProps, CategorySelectProps } from "./interfaces";
import { FlatList } from "react-native";
import { categories } from "../../utils/categories";
import { Button } from "../../components/Forms/Button";

export const CategorySelect = ({
	category,
	setCategory,
	closeSelectCategory,
}: CategorySelectProps) => {
	const handleCategorySelected = (item: CategoryProps) => {
		setCategory(item);
	};
	return (
		<Container>
			<Header>
				<Title>Categoria</Title>
			</Header>

			<FlatList
				data={categories}
				style={{ flex: 1, width: "100%" }}
				keyExtractor={(item) => item.key}
				renderItem={({ item }) => (
					<Category
						isActive={category.key === item.key}
						onPress={() => handleCategorySelected(item)}
					>
						<Icon name={item.icon} />
						<Name>{item.name}</Name>
					</Category>
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>

			<Footer>
				<Button title="Adicionar" onPress={closeSelectCategory} />
			</Footer>
		</Container>
	);
};

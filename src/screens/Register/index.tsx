import React, { useState } from "react";
import { Modal } from "react-native";

import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { Select } from "../../components/Forms/Select";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import { CategorySelect } from "../CategorySelect";

import { CategoryProps } from "./../CategorySelect/interfaces";

import {
	Container,
	Fields,
	Form,
	Header,
	Title,
	TransactionsType,
} from "./styles";

export const Register = () => {
	const [category, setCategory] = useState<CategoryProps>({
		key: "category",
		name: "Categoria",
	} as CategoryProps);
	const [transactionType, setTransactionType] = useState("");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);

	const handleTransactionsTypeSelect = (type: "up" | "down") => {
		setTransactionType(type);
	};

	const handleCloseCategoryModal = () => {
		setCategoryModalOpen(false);
	};

	const handleOpenCategoryModal = () => {
		setCategoryModalOpen(true);
	};

	return (
		<Container>
			<Header>
				<Title>Registo</Title>
			</Header>

			<Form>
				<Fields>
					<Input placeholder="Nome" />
					<Input placeholder="Preco" />

					<TransactionsType>
						<TransactionTypeButton
							type="up"
							title="Income"
							isActive={transactionType === "up"}
							onPress={() => handleTransactionsTypeSelect("up")}
						/>
						<TransactionTypeButton
							type="down"
							title="Outcome"
							isActive={transactionType === "down"}
							onPress={() => handleTransactionsTypeSelect("down")}
						/>
					</TransactionsType>

					<Select
						onPress={handleOpenCategoryModal}
						title={category.name}
					/>
				</Fields>

				<Button title="Guardar" />
			</Form>

			<Modal visible={categoryModalOpen}>
				<CategorySelect
					category={category}
					setCategory={setCategory}
					closeSelectCategory={handleCloseCategoryModal}
				/>
			</Modal>
		</Container>
	);
};

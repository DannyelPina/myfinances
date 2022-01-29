import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Forms/Button";
import { ControlledInput } from "../../components/Forms/ControlledInput";
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

	const { control, handleSubmit } = useForm();

	const handleTransactionsTypeSelect = (type: "up" | "down") => {
		setTransactionType(type);
	};

	const handleCloseCategoryModal = () => {
		setCategoryModalOpen(false);
	};

	const handleOpenCategoryModal = () => {
		setCategoryModalOpen(true);
	};

	const handleSave = handleSubmit((form) => {
		const data = {
			name: form.name,
			amount: form.amount,
			transactionType,
			category: category.key,
		};

		console.log(data);
	});

	return (
		<Container>
			<Header>
				<Title>Registo</Title>
			</Header>

			<Form>
				<Fields>
					<ControlledInput
						control={control}
						name="name"
						placeholder="Nome"
					/>
					<ControlledInput
						control={control}
						name="amount"
						placeholder="Preco"
					/>

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

				<Button title="Guardar" onPress={handleSave} />
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

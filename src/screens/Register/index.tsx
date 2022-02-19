import React, { useEffect, useState } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import {
	useNavigation,
	NavigationProp,
	ParamListBase,
} from "@react-navigation/native";

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
import { useAuth } from "../../hooks/auth";

const schema = Yup.object().shape({
	name: Yup.string().required("Nome obrigatorio"),
	amount: Yup.number()
		.typeError("Informe valor numerico")
		.positive("O valor nao pode ser negativo")
		.required("Valor obrigatorio"),
});

export const Register = () => {
	const { navigate }: NavigationProp<ParamListBase> = useNavigation();
	const [category, setCategory] = useState<CategoryProps>({
		key: "category",
		name: "Categoria",
	} as CategoryProps);
	const [transactionType, setTransactionType] = useState("");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);

	const { user } = useAuth();

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleSetCategory = (item: CategoryProps) => {
		setCategory(item);
	};

	const handleTransactionsTypeSelect = (type: "up" | "down") => {
		setTransactionType(type);
	};

	const handleCloseCategoryModal = () => {
		setCategoryModalOpen(false);
	};

	const handleOpenCategoryModal = () => {
		setCategoryModalOpen(true);
	};

	const handleSave = handleSubmit(async (form) => {
		if (!transactionType) {
			return Alert.alert("Selecione o tipo de transacao!");
		}

		if (category.key === "category") {
			return Alert.alert("Selecione a categoria!");
		}

		const newTransaction = {
			id: String(uuid.v4()),
			name: form.name,
			amount: form.amount,
			type: transactionType,
			category: category.key,
			date: new Date(),
		};

		try {
			const dataKey = `@myfinances:transactions_user:${user.id}`;
			const data = await AsyncStorage.getItem(dataKey);
			const currentTransactions = data ? JSON.parse(data) : [];
			const formatedTransactions = [
				...currentTransactions,
				newTransaction,
			];
			await AsyncStorage.setItem(
				dataKey,
				JSON.stringify(formatedTransactions)
			);

			reset();
			setTransactionType("");
			setCategory({ key: "category", name: "Categoria" });

			navigate("Listagem");
		} catch (error) {
			console.log(error);
			Alert.alert("Nao foi possivel gravar");
		}
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
						autoCapitalize="sentences"
						autoCorrect={false}
						error={errors.name && errors.name.message}
					/>
					<ControlledInput
						control={control}
						name="amount"
						placeholder="Preco"
						keyboardType="numeric"
						error={errors.amount && errors.amount.message}
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
					setCategory={handleSetCategory}
					closeSelectCategory={handleCloseCategoryModal}
				/>
			</Modal>
		</Container>
	);
};

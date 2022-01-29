import React, { useState } from "react";

import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { Select } from "../../components/Forms/Select";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
	Container,
	Fields,
	Form,
	Header,
	Title,
	TransactionsType,
} from "./styles";

export const Register = () => {
	const [transactionType, setTransactionType] = useState("");

	const handleTransactionsTypeSelect = (type: "up" | "down") => {
		setTransactionType(type);
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

					<Select title="Categoria" />
				</Fields>

				<Button title="Guardar" />
			</Form>
		</Container>
	);
};

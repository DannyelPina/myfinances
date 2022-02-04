import { DataProps } from "../../components/TransactionCard/interfaces";

export interface DataListProps extends DataProps {
	id: string;
}

interface HighlightCardItemProps {
	amount: string;
	lastTransaction: string;
}
export interface HighlightCardDataProps {
	inComeSum: HighlightCardItemProps;
	outComeSum: HighlightCardItemProps;
	total: HighlightCardItemProps;
}

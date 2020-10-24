import { CreditDebitIndicator } from './creditDebitIndicator';

export interface Transaction {
  amountCurrency: {
    amount: number,
    currencyCode: string
  };
  type: string;
  creditDebitIndicator: CreditDebitIndicator;
}


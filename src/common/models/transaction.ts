import { CreditDebitIndicator } from './creditDebitIndicator';
import { Merchant } from './merchant';

export interface Transaction {
  amountCurrency: {
    amount: number,
    currencyCode: string
  };
  type: string;
  creditDebitIndicator: CreditDebitIndicator;
  merchant: Merchant;
}


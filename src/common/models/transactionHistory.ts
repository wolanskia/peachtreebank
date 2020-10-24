import { Transaction } from './transaction';
import { Merchant } from './merchant';

export interface TransactionHistory {
  categoryCode: string;
  dates: { valueDate: number | string };
  transaction: Transaction;
}

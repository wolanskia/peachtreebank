import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { data } from '../../data/transactions.json';

import getRandomCategoryCode from '../helpers/getRandomCategoryCode';
import { TransactionHistory, Transaction } from '../models';

import { MerchantService } from './merchant.service';

@Injectable({ providedIn: 'root' })
export class TransactionHistoryService {
  constructor(private merchantService: MerchantService) {}

  private transactionHistory: BehaviorSubject<Array<TransactionHistory>> = new BehaviorSubject(
    data.map(({ merchant, transaction, ...rest }) => ({
      transaction: { ...transaction, merchant: this.merchantService.getMerchantWithLogoUrl(merchant) },
      ...rest
    })) as Array<TransactionHistory>
  );

  createTransactionHistory(transaction: Transaction): void {
    this.transactionHistory.next([
      this.mapTransactionToTransactionHistory(transaction),
      ...this.transactionHistory.getValue()
    ]);
  }

  getHistory(): Observable<Array<TransactionHistory>> {
    return this.transactionHistory.asObservable();
  }

  private mapTransactionToTransactionHistory(transaction: Transaction): TransactionHistory {
    return {
      categoryCode: getRandomCategoryCode(),
      dates: { valueDate: Date.now() },
      transaction
    };
  }
}

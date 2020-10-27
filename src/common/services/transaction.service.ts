import { Injectable } from '@angular/core';

import { Transfer, Transaction } from '../models';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { TransactionHistoryService } from './transactionHistory.service';
import { MerchantService } from './merchant.service';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  constructor(
    private merchantService: MerchantService,
    private transactionHistoryService: TransactionHistoryService
  ) { }

  createTransaction(transfer: Transfer): void {
    this.mapTransferToTransaction(transfer)
      .pipe(take(1))
      .subscribe((transaction: Transaction) => this.transactionHistoryService.createTransactionHistory(transaction))
  }

  private mapTransferToTransaction(transfer: Transfer): Observable<Transaction> {
    return this.merchantService.search(transfer.toAccount).pipe(
      map((merchant) => ({
        amountCurrency: {
          amount: transfer.amount,
          currencyCode: 'USD'
        },
        creditDebitIndicator: null,
        type: 'Online Transfer',
        merchant
      }))
    );
  }
}

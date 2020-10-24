import { Injectable } from '@angular/core';

import { TransactionHistoryService } from '../../common/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TransactionHistoryRecord } from '../transaction-history-record/transactionHistoryRecord';

@Injectable()
export class RecentTransactionsService {
  constructor(private transactionHistoryService: TransactionHistoryService) { }

  getRecentTransactions(): Observable<Array<TransactionHistoryRecord>> {
    return this.transactionHistoryService.getHistory().pipe(
      map((transactionHistories) => transactionHistories.map((history) => ({
        date: history.dates.valueDate,
        logoUrl: 'logourl.png',
        beneficiary: history.transaction.merchant.name,
        amount: history.transaction.amountCurrency.amount,
        transactionType: history.transaction.type
      })))
    );
  }
}

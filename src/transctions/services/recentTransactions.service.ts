import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { TransactionHistoryService } from '../../shared/services';
import { TransactionHistory, SortOrder } from '../../shared/models';
import { sortByDateField, sortByField, sortByFloatField } from '../../shared/helpers/sortRecords';

import { TransactionHistoryRecord } from '../models/transactionHistoryRecord';

@Injectable()
export class RecentTransactionsService {
  private sortOrder: BehaviorSubject<SortOrder> = new BehaviorSubject({ field: 'date', direction: 'desc'});
  private filterKeyword: BehaviorSubject<string> = new BehaviorSubject('');

  recentTransactions$: Observable<Array<TransactionHistoryRecord>> = combineLatest(
    this.getRecentTransactions(),
    this.filterKeyword.asObservable(),
    this.sortOrder.asObservable(),
    (records, filter, sortOrder) => records
      .filter((record) => record.beneficiary.toLowerCase().includes(filter.toLowerCase()))
      .sort(this.sortRecords(sortOrder))
  );

  constructor(private transactionHistoryService: TransactionHistoryService) { }

  getRecentTransactions(): Observable<Array<TransactionHistoryRecord>> {
    return this.transactionHistoryService.getHistory().pipe(
      map((transactionHistories) => transactionHistories.map((history) => this.mapTransactionHistoryToRecord(history)))
    );
  }

  filter(keyword: string) {
    this.filterKeyword.next(keyword);
  }

  sort(sortOrder: SortOrder) {
    this.sortOrder.next(sortOrder);
  }

  private mapTransactionHistoryToRecord(history: TransactionHistory): TransactionHistoryRecord {
    return {
      date: history.dates.valueDate,
      logoUrl: `${history.transaction.merchant.name.toLowerCase().split(' ').join('-')}.png`,
      beneficiary: history.transaction.merchant.name,
      amount: history.transaction.amountCurrency.amount,
      transactionType: history.transaction.type
    };
  }

  private sortRecords({ field, direction }: SortOrder): (a: any, b: any) => number {
    switch (field) {
      case 'date':
        return sortByDateField('date', direction);
      case 'beneficiary':
        return sortByField('beneficiary', direction);
      case 'amount':
        return sortByFloatField('amount', direction);
    }
  }
}

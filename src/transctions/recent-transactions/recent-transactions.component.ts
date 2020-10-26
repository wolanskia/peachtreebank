import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RecentTransactionsService } from './recentTransactions.service';
import { TransactionHistoryRecord } from '../transaction-history-record/transactionHistoryRecord';

@Component({
  selector: 'app-recent-transactions',
  styleUrls: ['./recent-transactions.component.scss'],
  templateUrl: './recent-transactions.component.html'
})
export class RecentTransactionsComponent {
  public recentTransactions$: Observable<Array<TransactionHistoryRecord>> = this.recentTransactionsService.recentTransactions$;

  constructor(private recentTransactionsService: RecentTransactionsService) { }

  filterRecentTransactions(keyword: string): void {
    this.recentTransactionsService.filter(keyword);
  }

  sortRecentTransactions(field: string, direction: 'asc' | 'desc'): void {
    this.recentTransactionsService.sort({ field, direction });
  }
}

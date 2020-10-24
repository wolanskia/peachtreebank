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
  public recentTransactions$: Observable<Array<TransactionHistoryRecord>> = this.recentTransactionsService.getRecentTransactions();

  constructor(private recentTransactionsService: RecentTransactionsService) { }
}

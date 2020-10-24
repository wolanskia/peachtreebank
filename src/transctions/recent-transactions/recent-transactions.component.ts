import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, merge, tap, mergeMap } from 'rxjs/operators';

import { RecentTransactionsService } from './recentTransactions.service';
import { TransactionHistoryRecord } from '../transaction-history-record/transactionHistoryRecord';

@Component({
  selector: 'app-recent-transactions',
  styleUrls: ['./recent-transactions.component.scss'],
  templateUrl: './recent-transactions.component.html'
})
export class RecentTransactionsComponent {
  public search: FormControl = new FormControl('');
  public recentTransactions$: Observable<Array<TransactionHistoryRecord>> = this.recentTransactionsService
    .getRecentTransactions().pipe(
      tap(console.log),
    );

  constructor(private recentTransactionsService: RecentTransactionsService) { }

  private filterRecentTransactions(keyword: Observable<string>): Observable<Array<TransactionHistoryRecord>> {
    return keyword.pipe(
      mergeMap((search) => this.recentTransactionsService.getRecentTransactions().pipe(

      ))
    );
  }
}

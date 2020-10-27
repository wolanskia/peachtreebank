import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TransactionHistoryRecordComponent } from './transaction-history-record/transaction-history-record.component';
import { TransactionHistoryListComponent } from './transaction-history-list/transaction-history-list.component';
import { TransactionSortComponent } from './transaction-sort/transaction-sort.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';

import { RecentTransactionsService } from './recent-transactions/recentTransactions.service';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [
    RecentTransactionsComponent,
    TransactionHistoryListComponent,
    TransactionHistoryRecordComponent,
    TransactionSortComponent,
  ],
  exports: [
    RecentTransactionsComponent,
    TransactionHistoryListComponent,
    TransactionHistoryRecordComponent,
    TransactionSortComponent,
  ],
  providers: [RecentTransactionsService]
})
export class TransactionsModule { }

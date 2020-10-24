import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRecordComponent } from './transaction-history-record/transaction-history-record.component';
import { TransactionHistoryListComponent } from './transaction-history-list/transaction-history-list.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';

import { RecentTransactionsService } from './recent-transactions/recentTransactions.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from 'src/common/common.module';

@NgModule({
  imports: [CommonModule, CommonComponentModule, ReactiveFormsModule],
  declarations: [
    RecentTransactionsComponent,
    TransactionHistoryListComponent,
    TransactionHistoryRecordComponent
  ],
  exports: [
    RecentTransactionsComponent,
    TransactionHistoryListComponent,
    TransactionHistoryRecordComponent
  ],
  providers: [RecentTransactionsService]
})
export class TransactionsModule { }

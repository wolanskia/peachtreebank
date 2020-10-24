import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRecordComponent } from './transaction-history-record/transaction-history-record.component';
import { TransactionHistoryListComponent } from './transaction-history-list/transaction-history-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TransactionHistoryListComponent,
    TransactionHistoryRecordComponent
  ],
  exports: [
    TransactionHistoryListComponent,
    TransactionHistoryRecordComponent
  ]
})
export class TransactionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRecordComponent } from './transaction-history-record/transaction-history-record.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TransactionHistoryRecordComponent],
  exports: [TransactionHistoryRecordComponent]
})
export class TransactionsModule { }

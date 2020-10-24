import { Component, Input } from '@angular/core';

import { TransactionHistoryRecord } from './transactionHistoryRecord';

@Component({
  selector: 'app-transaction-history-record',
  styleUrls: ['./transaction-history-record.component.scss'],
  templateUrl: './transaction-history-record.component.html'
})
export class TransactionHistoryRecordComponent {
  @Input() record: TransactionHistoryRecord;
}

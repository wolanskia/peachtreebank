import { Component, ViewEncapsulation, Input } from '@angular/core';

import { TransactionHistoryRecord } from '../../models/transactionHistoryRecord';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-transaction-history-record',
  styleUrls: ['./transaction-history-record.component.scss'],
  templateUrl: './transaction-history-record.component.html'
})
export class TransactionHistoryRecordComponent {
  @Input() record: TransactionHistoryRecord;
}

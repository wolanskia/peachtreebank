import { Component, Input } from '@angular/core';

import { TransactionHistoryRecord } from '../transaction-history-record/transactionHistoryRecord';

@Component({
  selector: 'app-transaction-history-list',
  styleUrls: ['./transaction-history-list.component.scss'],
  templateUrl: './transaction-history-list.component.html'
})
export class TransactionHistoryListComponent {
  @Input() transactions: Array<TransactionHistoryRecord>;
}

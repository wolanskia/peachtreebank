import { Component, EventEmitter, Output } from '@angular/core';

import { SortOrder } from 'src/common/models';

@Component({
  selector: 'app-transaction-sort',
  styleUrls: ['./transaction-sort.component.scss'],
  templateUrl: './transaction-sort.component.html'
})
export class TransactionSortComponent {
  @Output() sort: EventEmitter<SortOrder> = new EventEmitter<SortOrder>();

  sortOrder = { field: 'date', direction: 'asc' };

}

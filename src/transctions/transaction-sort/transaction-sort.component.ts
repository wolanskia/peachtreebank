import { Component, EventEmitter, Output } from '@angular/core';

import { SortOrder } from '../../shared/models';

@Component({
  selector: 'app-transaction-sort',
  styleUrls: ['./transaction-sort.component.scss'],
  templateUrl: './transaction-sort.component.html'
})
export class TransactionSortComponent {
  @Output() sort: EventEmitter<SortOrder> = new EventEmitter<SortOrder>();

  sortOrder: SortOrder = { field: 'date', direction: 'asc' };

  updateSort(field: string): void {
    const direction: 'asc' | 'desc' = field === this.sortOrder.field ?
      this.sortOrder.direction === 'asc' ?
        'desc' : 'asc'
      : this.sortOrder.direction;

    this.sortOrder = { field, direction };
    this.sort.emit({ field, direction });
  }
}

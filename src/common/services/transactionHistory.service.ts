import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { data } from '../../data/transactions.json';
import { TransactionHistory } from '../models';

@Injectable({ providedIn: 'root' })
export class TransactionHistoryService {
  private transactionHistory: BehaviorSubject<Array<TransactionHistory>> = new BehaviorSubject(data as Array<TransactionHistory>);

  getHistory(): Observable<Array<TransactionHistory>> {
    return this.transactionHistory.asObservable();
  }
}

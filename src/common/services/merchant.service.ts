import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { data } from '../../data/transactions.json';

import { Merchant } from '../models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MerchantService {
  private merchants: BehaviorSubject<Array<Merchant>> = new BehaviorSubject(data.map(({ merchant }) => merchant));

  search(merchantName: string): Observable<Merchant> {
    return this.findMerchant(merchantName);
  }

  private findMerchant(merchantName: string): Observable<Merchant> {
    return this.merchants.pipe(
      map((merchants) => {
        const merchant = merchants.find(({ name }) => name.toLocaleLowerCase().includes(merchantName.toLocaleLowerCase()));

        return merchant || {
          name: merchantName,
          accountNumber: '0000000000000'
        };
      })
    );
  }
}

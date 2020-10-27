import { Component } from '@angular/core';
import { transferForm } from './transfer.form';
import { FormGroup } from '@angular/forms';

import { Transfer } from '../shared/models';
import { TransactionService } from '../shared/services';

@Component({
  selector: 'app-transfer',
  styleUrls: ['./transfer.component.scss'],
  templateUrl: './transfer.component.html'
})
export class TransferComponent {
  form: FormGroup = transferForm;
  accountBalance = 5824.76;

  constructor(private transactionService: TransactionService) {}

  createTransfer(transfer: Transfer) {
    this.transactionService.createTransaction(transfer);
    this.accountBalance = parseFloat(`${this.accountBalance - transfer.amount}`);
    this.form.reset();
  }
}

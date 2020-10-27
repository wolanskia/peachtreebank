import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Transfer } from '../shared/models';
import { TransactionService } from '../shared/services';
import { ConfirmComponent } from 'src/shared/components/confirm/confirm.component';

import { transferForm } from './transfer.form';

@Component({
  selector: 'app-transfer',
  styleUrls: ['./transfer.component.scss'],
  templateUrl: './transfer.component.html'
})
export class TransferComponent {
  form: FormGroup = transferForm;
  accountBalance = 5824.76;
  overdrawLimit = -500;

  @ViewChild(ConfirmComponent, { static: false }) confirmComponent: ConfirmComponent;

  constructor(private transactionService: TransactionService) {}

  goBack(): void {
    this.confirmComponent.reset();
  }

  confirmTransfer(): void {
    this.confirmComponent.confirm();
  }

  createTransfer(transfer: Transfer) {
    this.transactionService.createTransaction(transfer);
    this.accountBalance = parseFloat(`${this.accountBalance - transfer.amount}`);
    this.form.reset();
    this.confirmComponent.reset();
  }
}

import { Component } from '@angular/core';
import { transferForm } from './transfer.form';
import { TransactionService } from 'src/common/services';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  styleUrls: ['./transfer.component.scss'],
  templateUrl: './transfer.component.html'
})
export class TransferComponent {
  form: FormGroup = transferForm;

  constructor(private transactionService: TransactionService) {}

  createTransfer() {
    this.transactionService.createTransaction(this.form.getRawValue());
  }
}

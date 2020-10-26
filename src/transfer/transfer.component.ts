import { Component } from '@angular/core';
import { transferForm } from './transfer.form';

@Component({
  selector: 'app-transfer',
  styleUrls: ['./transfer.component.scss'],
  templateUrl: './transfer.component.html'
})
export class TransferComponent {
  form = transferForm;

  createTransfer(value) {
    console.log(this.form);
  }
}

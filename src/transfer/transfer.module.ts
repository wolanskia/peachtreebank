import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TransferComponent } from './transfer.component';

@NgModule({
  imports: [ReactiveFormsModule, SharedModule],
  declarations: [TransferComponent],
  exports: [TransferComponent]
})
export class TransferModule {}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransferComponent } from './transfer.component';
import { CommonComponentModule } from 'src/common/common.module';

@NgModule({
  imports: [ReactiveFormsModule, CommonComponentModule],
  declarations: [TransferComponent],
  exports: [TransferComponent]
})
export class TransferModule {}

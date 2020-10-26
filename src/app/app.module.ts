import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionsModule } from '../transctions/transactions.module';
import { CommonComponentModule } from 'src/common/common.module';
import { TransferModule } from 'src/transfer/transfer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonComponentModule,
    TransferModule,
    TransactionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { componentDeclarations } from './components';
import { RecentTransactionsService } from './services/recentTransactions.service';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: componentDeclarations,
  exports: componentDeclarations,
  providers: [RecentTransactionsService]
})
export class TransactionsModule { }

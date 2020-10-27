import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmComponent, ConfirmationStepDirective, PreConfirmDirective } from './components/confirm/confirm.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmComponent, ConfirmationStepDirective, PreConfirmDirective, PanelComponent],
  exports: [ConfirmComponent, ConfirmationStepDirective, PreConfirmDirective, PanelComponent]
})
export class SharedModule {}

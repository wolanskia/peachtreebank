import { Component, ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({ selector: 'ng-template[confirmStep]' })
export class ConfirmationStepDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: 'ng-template[preConfirm]' })
export class PreConfirmDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'app-confirm',
  styleUrls: ['./confirm.component.scss'],
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
  @ContentChild(ConfirmationStepDirective, { static: false }) confirmStep: ConfirmationStepDirective;
  @ContentChild(PreConfirmDirective, { static: false }) preConfirm: PreConfirmDirective;

  isConfirmStep = false;

  confirm(): void {
    this.isConfirmStep = true;
  }

  reset(): void {
    this.isConfirmStep = false;
  }
}

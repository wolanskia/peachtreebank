import { FormGroup, FormControl, Validators } from '@angular/forms';

export const transferForm = new FormGroup({
  fromAccount: new FormControl(''),
  toAccount: new FormControl('', Validators.required),
  amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/)])
});

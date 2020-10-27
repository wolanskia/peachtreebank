import { FormGroup, FormControl, Validators } from '@angular/forms';

export const transferForm = new FormGroup({
  fromAccount: new FormControl(''),
  toAccount: new FormControl('', Validators.required),
  amount: new FormControl('', Validators.required)
});

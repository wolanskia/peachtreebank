import { FormGroup, FormControl, Validators } from '@angular/forms';

export const transferForm = new FormGroup({
  from: new FormControl(''),
  to: new FormControl('', Validators.required),
  amount: new FormControl('', Validators.required)
});

import { FormGroup } from '@angular/forms';

export function IsValid(control1: string, accounts: any) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[control1];
        console.log(accounts);
      //  const matchControl = formGroup.controls[control2];

        // if (matchControl.errors && !matchControl.errors.mustMatch) {
        //     return;
        // }

        // if (control.value !== matchControl.value) {
        //     matchControl.setErrors({ mustMatch: true });
        // } else {
        //     matchControl.setErrors(null);
        // }
    };
}

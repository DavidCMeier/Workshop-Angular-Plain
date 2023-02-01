import { AbstractControl } from "@angular/forms";
import { map, of, switchMap, timer } from "rxjs";
import { AuthService } from "../../../core/services/auth.service";

export class CustomValidations {

  static confirmPassword(field: string) {
    return (control: AbstractControl) =>{
      const password = control.value;
      const confirmPassword = control.parent?.get(field)?.value;
      return password === confirmPassword ? null : { confirmPassword: true };
    }
  }
  static existEmail(authService: AuthService) {
    return (control: AbstractControl) => {
      if (control.pristine) return of(null)
      return timer(500).pipe(
        switchMap(() => authService.emailExists(control.value).pipe(
            map(res => !res ? null : {emailExist: true}),
          ),
        ),
      )
    }
  }
}

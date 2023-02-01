import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidations } from "../../helpers/validations";
import { AuthService } from "../../../../core/services/auth.service";


@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent implements OnInit {

  form!: FormGroup;
  formB!: FormGroup;
  countries: string[] = ['USA', 'Germany', 'Italy', 'France', 'Poland', 'Russia', 'China', 'Japan'];
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    const user = {
      name: 'David',
      email: 'david.calvo@plainconcepts.com',
      telephone: '5555555555',
      country: 'spain',
      sex: 'man',
      acceptTerms: true
    }
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email], CustomValidations.existEmail(this.authService)),
      telephone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9,10}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
      confirmPassword: new FormControl('', [Validators.required, CustomValidations.confirmPassword('password')]),
      country: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      acceptTerms: new FormControl(false, Validators.requiredTrue)
    }, []);
    this.formB= this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('[0-9]{9,10}')]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      sex: [''],
      acceptTerms: [false, Validators.requiredTrue],
    })

    //this.form.setValue(user)
    //this.form.patchValue(user)
  }

  showForm() {
    console.log(this.form)
  }


}

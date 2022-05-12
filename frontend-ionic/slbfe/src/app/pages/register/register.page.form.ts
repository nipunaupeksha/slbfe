import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class RegisterPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      surName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required],
      affiliation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      passportId: ['', Validators.required],
      passportFile: ['', Validators.required],
      nicId: ['', Validators.required],
      nicFile: ['', Validators.required],
      birthCertificateId: ['', Validators.required],
      birthCertificateFile: ['', Validators.required],
      qualifications: ['', Validators.required],
    });
  }
}

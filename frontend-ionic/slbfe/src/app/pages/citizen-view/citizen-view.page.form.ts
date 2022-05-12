import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Citizen } from 'src/app/Citizen';

export class CitizenViewForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(citizen:Citizen): FormGroup {
    return this.formBuilder.group({
      firstName: [citizen.firstName, Validators.required],
      lastName: [citizen.lastName, Validators.required],
      surName: [citizen.surName, Validators.required],
      gender: [citizen.gender, Validators.required],
      dateOfBirth: [citizen.dateOfBirth, Validators.required],
      age: [citizen.age, Validators.required],
      profession: [citizen.profession, Validators.required],
      affiliation: [citizen.affiliation, Validators.required],
      email: [citizen.email, [Validators.required, Validators.email]],
      password: [citizen.password, [Validators.required]],
      phone: [citizen.phone, Validators.required],
      mobile: [citizen.mobile, Validators.required],
      address: [citizen.address, Validators.required],
      passportId: [citizen.passport.passportId, Validators.required],
      passportFile: [citizen.passport.passportFile, Validators.required],
      nicId: [citizen.nic.nicId, Validators.required],
      nicFile: [citizen.nic.nicFile, Validators.required],
      birthCertificateId: [citizen.birthCertificate.birthCertificateId, Validators.required],
      birthCertificateFile: [citizen.birthCertificate.birthCertificateFile, Validators.required],
      qualifications: [citizen.qualificationList, Validators.required],
    });
  }
}

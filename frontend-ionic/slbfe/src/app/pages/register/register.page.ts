import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/Citizen';
import { CitizenServiceService } from 'src/app/services/citizen-service.service';
import { RegisterPageForm } from './register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private citizenService: CitizenServiceService
  ) {}

  form: FormGroup;
  citizens: Citizen[] = [];

  ngOnInit() {
    this.form = new RegisterPageForm(this.formBuilder).createForm();
  }


  onSubmit() {
    const newCitizen: Citizen = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      surName: this.form.value.surName,
      gender: this.form.value.gender,
      dateOfBirth: this.form.value.dateOfBirth,
      age: this.form.value.age,
      profession: this.form.value.profession,
      affiliation: this.form.value.affiliation,
      email: this.form.value.email,
      password: this.form.value.password,
      mobile: this.form.value.mobile,
      phone:this.form.value.phone,
      address: this.form.value.address,
      passport: {
        passportId: this.form.value.passportId,
        passportFile: this.form.value.passportFile,
      },
      nic: {
        nicId: this.form.value.nicId,
        nicFile: this.form.value.nicFile,
      },
      birthCertificate: {
        birthCertificateId: this.form.value.birthCertificateId,
        birthCertificateFile: this.form.value.birthCertificateFile,
      },
      qualificationList: this.form.value.qualifications.split(','),
    };


    this.citizenService
      .addCitizen(newCitizen)
      .subscribe((citizen) => this.citizens.push(citizen));

    setTimeout(() => {
      this.router.navigate(['view']);
    }, 200);
  }
}

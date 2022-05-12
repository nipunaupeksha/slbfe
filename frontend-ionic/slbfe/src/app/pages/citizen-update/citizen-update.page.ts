import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Citizen } from 'src/app/Citizen';
import { CitizenServiceService } from 'src/app/services/citizen-service.service';
import { CitizenUpdateForm } from './citizen-update.page.form';

@Component({
  selector: 'app-citizen-update',
  templateUrl: './citizen-update.page.html',
  styleUrls: ['./citizen-update.page.scss'],
})
export class CitizenUpdatePage implements OnInit {
  form: FormGroup;
  citizens: Citizen[] = [];
  citizen: Citizen;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private citizenService: CitizenServiceService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.citizen = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {
    this.form = new CitizenUpdateForm(this.formBuilder).createForm(this.citizen);
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
      password: this.citizen.password,
      phone: this.citizen.phone,
      mobile: this.form.value.mobile,
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
      qualificationList: this.citizen.qualificationList,
    };

    this.citizenService
      .updateCitizen(newCitizen)
      .subscribe((citizen) => this.citizens.push(citizen));

    setTimeout(() => {
      this.router.navigate(['view']);
    }, 200);
  }
}

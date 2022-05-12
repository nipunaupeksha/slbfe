import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citizen } from 'src/app/Citizen';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitizenViewForm } from './citizen-view.page.form';

@Component({
  selector: 'app-citizen-view',
  templateUrl: './citizen-view.page.html',
  styleUrls: ['./citizen-view.page.scss'],
})
export class CitizenViewPage implements OnInit {
  form: FormGroup;
  citizen: Citizen;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.citizen = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {
    this.form = new CitizenViewForm(this.formBuilder).createForm(this.citizen);
  }

}

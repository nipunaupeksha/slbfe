import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citizen } from 'src/app/Citizen';

@Component({
  selector: 'app-citizen-contact',
  templateUrl: './citizen-contact.page.html',
  styleUrls: ['./citizen-contact.page.scss'],
})
export class CitizenContactPage implements OnInit {
  citizen: Citizen;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.citizen = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {}
}

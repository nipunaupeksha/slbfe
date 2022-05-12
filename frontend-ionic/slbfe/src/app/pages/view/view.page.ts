import { Component, OnInit } from '@angular/core';
import { Citizen } from '../../Citizen';
import { CitizenServiceService } from 'src/app/services/citizen-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  private citizens: Citizen[] = [];
  constructor(private citizenService: CitizenServiceService) {}

  ngOnInit() {
    this.citizenService
      .getCitizens()
      .subscribe((citizens) => (this.citizens = citizens));
  }

  deleteCitizen(citizen: Citizen) {
    this.citizenService
      .deleteCitizen(citizen)
      .subscribe(
        () =>
          (this.citizens = this.citizens.filter(
            (t) => t.nic.nicId !== citizen.nic.nicId
          ))
      );
  }
}

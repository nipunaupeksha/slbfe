import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Citizen } from 'src/app/Citizen';

@Component({
  selector: 'app-citizen-item',
  templateUrl: './citizen-item.component.html',
  styleUrls: ['./citizen-item.component.scss'],
})
export class CitizenItemComponent implements OnInit {

  @Input() citizen: Citizen;
  @Output() onDeleteCitizen: EventEmitter<Citizen> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {}

  onDelete(citizen){
    this.onDeleteCitizen.emit(citizen);
  }

  onUpdate(citizen:Citizen){
    const navigationExtras: NavigationExtras = {
      queryParams:{
        special: JSON.stringify(citizen)
      }
    }
    this.router.navigate(['citizen-update'], navigationExtras)
  }

}

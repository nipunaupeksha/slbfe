import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Add Citizen', url: '', icon: 'person-add' },
    { title: 'View Citizens ', url: 'view', icon: 'person' },
  ];
  public labels = [];
  constructor() {}
}

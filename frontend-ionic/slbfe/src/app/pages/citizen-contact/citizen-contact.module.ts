import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenContactPageRoutingModule } from './citizen-contact-routing.module';

import { CitizenContactPage } from './citizen-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenContactPageRoutingModule
  ],
  declarations: [CitizenContactPage]
})
export class CitizenContactPageModule {}

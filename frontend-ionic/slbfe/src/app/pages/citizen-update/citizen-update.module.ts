import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenUpdatePageRoutingModule } from './citizen-update-routing.module';

import { CitizenUpdatePage } from './citizen-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenUpdatePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CitizenUpdatePage]
})
export class CitizenUpdatePageModule {}

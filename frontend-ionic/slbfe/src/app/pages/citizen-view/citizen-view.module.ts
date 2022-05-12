import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenViewPageRoutingModule } from './citizen-view-routing.module';

import { CitizenViewPage } from './citizen-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenViewPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CitizenViewPage],
})
export class CitizenViewPageModule {}

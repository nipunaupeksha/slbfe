import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPageRoutingModule } from './view-routing.module';

import { ViewPage } from './view.page';
import { CitizenItemComponent } from 'src/app/components/citizen-item/citizen-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule
  ],
  declarations: [ViewPage, CitizenItemComponent]
})
export class ViewPageModule {}

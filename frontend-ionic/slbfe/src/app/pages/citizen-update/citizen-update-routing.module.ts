import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenUpdatePage } from './citizen-update.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenUpdatePageRoutingModule {}

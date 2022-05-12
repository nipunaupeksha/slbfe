import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenViewPage } from './citizen-view.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenViewPageRoutingModule {}

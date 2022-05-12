import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'citizen-update',
    loadChildren: () => import('./pages/citizen-update/citizen-update.module').then( m => m.CitizenUpdatePageModule)
  },
  {
    path: 'citizen-view',
    loadChildren: () => import('./pages/citizen-view/citizen-view.module').then( m => m.CitizenViewPageModule)
  },
  {
    path: 'citizen-contact',
    loadChildren: () => import('./pages/citizen-contact/citizen-contact.module').then( m => m.CitizenContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

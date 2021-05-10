import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import{LoginComponent}from'./login/login.component';
import { EmphomeComponent } from './emphome/emphome.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path: '',redirectTo:'/login',pathMatch:"full"},
  {
    path: 'adminhome',component:AdminhomeComponent,canActivate:[AuthGuard]
  },{
    path: 'emphome',component:EmphomeComponent,canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule   {}

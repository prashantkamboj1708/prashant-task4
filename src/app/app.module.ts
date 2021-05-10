import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmphomeComponent } from './emphome/emphome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminhomeComponent,
    EmphomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

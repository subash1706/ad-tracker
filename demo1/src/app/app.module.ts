import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    SignupComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

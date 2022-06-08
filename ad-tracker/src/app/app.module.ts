import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdtrackingComponent } from './adtracking/adtracking.component';
import { PpctrackingComponent } from './ppctracking/ppctracking.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PixeltrackingComponent } from './pixeltracking/pixeltracking.component';
import { PostbacktrackingComponent } from './postbacktracking/postbacktracking.component';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginformComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AboutComponent,
    MainMenuComponent,
    NavigationComponent,
    AdtrackingComponent,
    PpctrackingComponent,
    ContactFormComponent,
    PixeltrackingComponent,
    PostbacktrackingComponent,
    SignupComponent,
    LoginformComponent,
    DashboardComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

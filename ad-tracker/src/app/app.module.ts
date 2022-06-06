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
import { TutorialComponent } from './tutorial/tutorial.component';
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
import { DeletecontentComponent } from './deletecontent/deletecontent.component';
import { EditComponent } from './edit/edit.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';



@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AboutComponent,
    MainMenuComponent,
    NavigationComponent,
    TutorialComponent,
    AdtrackingComponent,
    PpctrackingComponent,
    ContactFormComponent,
    PixeltrackingComponent,
    PostbacktrackingComponent,
    SignupComponent,
    LoginformComponent,
    DashboardComponent,
    AddComponent,
    DeletecontentComponent,
    EditComponent,
    Dashboard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AfflicateloakComponent } from './afflicateloak/afflicateloak.component';
import { AdtrackingComponent } from './adtracking/adtracking.component';
import { PpctrackingComponent } from './ppctracking/ppctracking.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PricingComponent } from './pricing/pricing.component';
import { ConversiontrackingComponent } from './conversiontracking/conversiontracking.component';
import { PixeltrackingComponent } from './pixeltracking/pixeltracking.component';
import { PostbacktrackingComponent } from './postbacktracking/postbacktracking.component';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AboutComponent,
    ServicesComponent,
    MainMenuComponent,
    NavigationComponent,
    TutorialComponent,
    AfflicateloakComponent,
    AdtrackingComponent,
    PpctrackingComponent,
    ContactFormComponent,
    PricingComponent,
    ConversiontrackingComponent,
    PixeltrackingComponent,
    PostbacktrackingComponent,
    SignupComponent
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

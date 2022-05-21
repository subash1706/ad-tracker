import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ServicesComponent } from './services/services.component';
import{TutorialComponent} from './tutorial/tutorial.component';
import { AfflicateloakComponent } from './afflicateloak/afflicateloak.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PpctrackingComponent } from './ppctracking/ppctracking.component';
import { AdtrackingComponent } from './adtracking/adtracking.component';
import { PricingComponent } from './pricing/pricing.component';
import { ConversiontrackingComponent } from './conversiontracking/conversiontracking.component';
import { PixeltrackingComponent } from './pixeltracking/pixeltracking.component';
import { PostbacktrackingComponent } from './postbacktracking/postbacktracking.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'features',component:FeaturesComponent},
  {path:'contact',component:ContactFormComponent},
  {path:'about',component:AboutComponent},
  {path:'tutorial',component:TutorialComponent},
  {path:'services',component:ServicesComponent},
  {path:'afflicateloak',component:AfflicateloakComponent},
  {path:'adtracking',component:AdtrackingComponent},
  {path:'ppctracking',component:PpctrackingComponent},
  {path:'pricing',component:PricingComponent},
  {path:'conversiontracking',component:ConversiontrackingComponent},
  {path:'pixeltracking',component:PixeltrackingComponent},
  {path:'postbacktracking',component:PostbacktrackingComponent},
  {path:'signup',component:SignupComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

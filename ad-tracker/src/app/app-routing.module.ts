import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PpctrackingComponent } from './ppctracking/ppctracking.component';
import { AdtrackingComponent } from './adtracking/adtracking.component';
import { PixeltrackingComponent } from './pixeltracking/pixeltracking.component';
import { PostbacktrackingComponent } from './postbacktracking/postbacktracking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from './test/test.component';
import { BlogsComponent } from './blogs/blogs.component';
const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'features',component:FeaturesComponent},
  {path:'contact',component:ContactFormComponent},
  {path:'about',component:AboutComponent},
  {path:'adtracking',component:AdtrackingComponent},
  {path:'ppctracking',component:PpctrackingComponent},
  {path:'pixeltracking',component:PixeltrackingComponent},
  {path:'postbacktracking',component:PostbacktrackingComponent},
  {path:'signup',component:SignupComponent},
  {path:'loginform',component:LoginformComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add',component:AddComponent},
  {path:'navigation',component:NavigationComponent},
  {path:'test', component:TestComponent},
  {path:'blogs', component:BlogsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

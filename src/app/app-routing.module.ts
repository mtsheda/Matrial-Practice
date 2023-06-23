import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APPLYComponent } from './apply/apply.component';
import { AffordabilityComponent } from './affordability/affordability.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: "apply", component: APPLYComponent},
  {path:"affordability", component:AffordabilityComponent},
  {path:"Contacts", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
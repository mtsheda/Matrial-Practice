import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { APPLYComponent } from './apply/apply.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { AffordabilityComponent } from './affordability/affordability.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContactComponent } from './contact/contact.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    APPLYComponent,
    AffordabilityComponent,
    ContactComponent
  ],
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
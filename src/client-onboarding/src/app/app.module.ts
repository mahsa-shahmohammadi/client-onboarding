import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './components/details/details.component';
import { AddressComponent } from './components/address/address.component';
import { ReviewComponent } from './components/review/review.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndexComponent } from './components/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NgxsModule } from '@ngxs/store';
import { OnboardingState } from './stores/states/onboarding.state';
import { environment } from 'src/environments/environment';







@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddressComponent,
    ReviewComponent,
    IndexComponent,

  ],
  imports: [
    NgxsModule.forRoot([OnboardingState], {
      developmentMode: !environment.production
    }),


    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    LabelModule,
    DropDownsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

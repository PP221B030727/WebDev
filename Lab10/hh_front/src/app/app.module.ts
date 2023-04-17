import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CompaniesComponent } from './companies/companies.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TopTenVacancyComponent } from './top-ten-vacancy/top-ten-vacancy.component';
import { CompanyComponent } from './companies/company/company.component';
import { VacancyComponent } from './vacancies/vacancy/vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    VacanciesComponent,
    CompaniesComponent,
    TopTenVacancyComponent,
    CompanyComponent,
    VacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

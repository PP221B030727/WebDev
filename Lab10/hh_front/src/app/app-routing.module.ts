import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {TopTenVacancyComponent} from "./top-ten-vacancy/top-ten-vacancy.component";
import {CompanyComponent} from "./companies/company/company.component";
import {VacancyComponent} from "./vacancies/vacancy/vacancy.component";
import {CompanyVacanciesComponent} from "./companies/company/company-vacancies/company-vacancies.component";




const routes : Routes = [
  {path:'companies',component:CompaniesComponent},
  {path:'vacancies',component:VacanciesComponent},
  {path:'top_ten', component:TopTenVacancyComponent},
  {path:'companies/:companyId',component:CompanyComponent},
  {path:'vacancies/:vacancyId', component:VacancyComponent},
  {path:'companies/:companyId/vacancies' , component:CompanyVacanciesComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }

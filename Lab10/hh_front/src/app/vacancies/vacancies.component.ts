import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {VacancyServiceService} from "./vacancy-service.service";
import {CompanyServiceService} from "../companies/company-service.service";


@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent implements OnInit{
  newVacancy = ''
  vacancyDescription: string = ''
  vacancySalary : string = ''
  companyName : string = ''
  vacancyCompany : Company|null = null;
  vacancies : Vacancy[] = [];
  companies : Company[] = [];
  receiveList(listOfCompany : Company[]){
      this.companies = listOfCompany;
  }
  constructor(private  vacancyService : VacancyServiceService  , private  companyService : CompanyServiceService) {

  }
  ngOnInit(){
    this.vacancyService.getVacancies().subscribe((vacancies)=>{
      this.vacancies = vacancies;
    });
    this.companyService.getCompanies().subscribe((company)=>{
      this.companies = company;
    });
  }

  getCompany(nameOfCompany : string) : Company|null{
    for( let i = 0; i<this.companies.length ;i++){
      if(this.companies[i].name ==  nameOfCompany){
        return this.companies[i];
      }
    }
    return null;
  }
  addVacancy(){
    this.vacancyCompany = this.getCompany(this.companyName)
    this.vacancyService.createVacancy(
      this.newVacancy ,
      this.vacancyDescription,
      this.vacancySalary,
      this.vacancyCompany
    ).subscribe((vacancy)=>{
      this.vacancies.push(vacancy);
      this.newVacancy = '';
      this.vacancyDescription = '';
      this.vacancySalary = '';
      this.companyName = '';
      this.vacancyCompany = null;
    });
  }
  deleteVacancy(id : number){
    this.vacancyService.deleteVacancy(id).subscribe((data)=>{
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== id);
    });
  }

}

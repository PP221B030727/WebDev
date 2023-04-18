import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../../models";
import {CompanyVacanciesService} from "./company-vacancies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {
  id : string = '';
  vacancies : Vacancy[] = [];
  constructor(private route: ActivatedRoute,private cVacSer : CompanyVacanciesService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['companyId'];
    this.cVacSer.getVacancies(parseInt(this.id)).subscribe((vacancies)=>{
      this.vacancies = vacancies;
    });
  }

}

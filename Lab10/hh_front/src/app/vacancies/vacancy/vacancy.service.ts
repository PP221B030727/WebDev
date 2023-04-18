import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client : HttpClient) { }
  getVacancy(id : string):Observable<Vacancy>{
    return this.client.get<Vacancy>(
      `${this.BASE_URL}/api/vacancies/${parseInt(id)}`,
    )
  }
  updateVacancy(id : number, newName : string , newDesc : string , newSalary : string ) : Observable<Vacancy>{
    return this.client.put<Vacancy>(
      `${this.BASE_URL}/api/vacancies/${id}`,
      {
        name : newName,
        description : newDesc,
        salary : newSalary
      });
  }

}

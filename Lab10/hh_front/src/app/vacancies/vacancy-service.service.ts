import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "../models";

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) {

  }
  getVacancies():Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies`
    )
  }



  createVacancy(
    name : string ,
    description : string ,
    salary : string ,
    company : Company|null
  ): Observable<Vacancy> {
    if(company!=null){
      return this.client.post<Vacancy>(
        `${this.BASE_URL}/api/vacancies`,
        {
          name: name,
          description : description,
          salary : parseFloat(salary),
          company : company
        }
      )
    }
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies`,
      {
        name : name ,
        description : description,
        salary : parseFloat(salary),
        company : {
          id : 0,
          name: 'Unknown Company',
          description: 'UNKNOWN',
          city: 'UNKNOWN',
          address: 'UNKNOWN'
        }
      }
    )

  }
  deleteVacancy(id:number):Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/vacancies/${id}`
    )
  }
}

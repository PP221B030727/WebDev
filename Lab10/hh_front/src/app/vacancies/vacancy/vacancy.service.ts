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
  getCompany(id : string):Observable<Vacancy>{
    return this.client.get<Vacancy>(
      `${this.BASE_URL}/api/vacancies/${parseInt(id)}`,
    )
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "../../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyVacanciesService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client : HttpClient) {

  }
  getVacancies(id : number):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${id}/vacancies`
    )
  }

}

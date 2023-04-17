import {Injectable} from '@angular/core';
import {Vacancy} from "../models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TopTenService  {

  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client : HttpClient) {

  }

  getTopTen():Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/top_ten`
    )
  }



}

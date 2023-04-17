import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client : HttpClient) {

  }
  getCompany(id : string):Observable<Company>{
    return this.client.get<Company>(
      `${this.BASE_URL}/api/companies/${parseInt(id)}`,
    )
  }

}

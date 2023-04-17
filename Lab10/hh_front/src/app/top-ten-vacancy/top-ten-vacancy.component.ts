import {Component, OnInit} from '@angular/core';
import { Vacancy} from "../models";
import {TopTenService} from "./top-ten.service";

@Component({
  selector: 'app-top-ten-vacancy',
  templateUrl: './top-ten-vacancy.component.html',
  styleUrls: ['./top-ten-vacancy.component.css']
})
export class TopTenVacancyComponent implements OnInit {
  topTenVacancies : Vacancy[] = [];

  constructor(private service : TopTenService) { }

  ngOnInit(): void {
    this.service.getTopTen().subscribe((vacancies)=>{
      this.topTenVacancies = vacancies;
      console.log(this.topTenVacancies);
    });
  }
}

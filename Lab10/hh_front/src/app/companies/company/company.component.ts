import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../models";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  id: string = '';
  company : Company|null = null;
  constructor(private route: ActivatedRoute , private companyService : CompanyService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['companyId'];
    this.companyService.getCompany(this.id).subscribe((company)=>{
      this.company = company;
    });
  }
}

import {Component,OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyServiceService} from "./company-service.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{

  newCompanyName = ''
  newCompanyDescription : string = '';
  newCompanyCity : string = '';
  newCompanyAddress : string = '';
  companies : Company[] = [];
  constructor(private  companyService : CompanyServiceService) {

  }
  ngOnInit(){
    this.companyService.getCompanies().subscribe((companies)=>{
      this.companies = companies;
    });
  }
  addCompany(){
    this.companyService.createCompany(this.newCompanyName,this.newCompanyDescription , this.newCompanyCity,this.newCompanyAddress).subscribe((company)=>{
      this.companies.push(company);
      this.newCompanyAddress = '';
      this.newCompanyName = '';
      this.newCompanyCity = '';
      this.newCompanyDescription = '';
    });
  }
  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe((data)=>{
      this.companies = this.companies.filter((company) => company.id !== id);
      console.log("Deleted");
    });
  }
}

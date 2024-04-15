import {Component, OnInit} from '@angular/core';
import {Company} from "../models/company";
import {CompanyService} from "../services/company.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{

  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

}

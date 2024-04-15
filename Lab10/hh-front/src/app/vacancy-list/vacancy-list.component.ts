import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models/vacancy";
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "../services/vacancy.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit{

  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    const companyId = +this.route.snapshot.paramMap.get('id');
    this.loadVacancies(companyId);
  }

  loadVacancies(companyId: number): void {
    this.vacancyService.getVacanciesByCompanyId(companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }

}

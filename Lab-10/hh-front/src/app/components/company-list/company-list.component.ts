import { Component } from '@angular/core';

@Component({
  selector: 'app-company-list',
  imports: [],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})


export class CompanyListComponent {
  companies: Company[] = [];
  selectedCompany: Company | null = null;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  onCompanyClick(company: Company): void {
    this.selectedCompany = company;
    this.companyService.getVacancies(company.id).subscribe((data) => {
      this.vacancies = data;
    });
  }

}

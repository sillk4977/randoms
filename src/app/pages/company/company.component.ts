import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyModel } from './models';
import { CompanyService } from './company.service';

@Component({
    selector: 'company',
    templateUrl: './company.component.html',
})
export class Company implements OnInit{
    companies: CompanyModel[] = [];
    showCompaniesFlag: boolean;

    constructor(
        private companyService: CompanyService,
        private router: Router,
    ){};
    ngOnInit(): void {
        this.showCompaniesFlag = true;
        this.getCompanies();
    }

    getCompanies(): void {
        this.companyService.getCompanies().then(companies => this.companies = companies);
    }

    getDetail(company: CompanyModel): void {
        this.router.navigate(['/pages/company/detail', company.id]);
    }

    showCompanies(): boolean {
        return this.showCompaniesFlag;
    }

    setShowFlag(flag: boolean): void{
        this.showCompaniesFlag = flag;
    }
}
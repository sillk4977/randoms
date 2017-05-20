import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyModel } from '../models';
import { CompanyService } from '../company.service';

@Component({
    selector: 'company-create',
    templateUrl: './company.create.component.html',
    styles: [],
})
export class CompanyCreate {
    company: CompanyModel = new CompanyModel();

    constructor(
        private companyService: CompanyService,
        private router: Router,
    ){}

    createCompany(): void {
        if(this.companyService.createCompany(this.company)){
            this.router.navigate(['/pages/company/', ])
        }
    }
}
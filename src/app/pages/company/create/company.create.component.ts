import { Component } from '@angular/core';

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
    ){}

    createCompany(): void {
        this.companyService.createCompany(this.company);
    }
}
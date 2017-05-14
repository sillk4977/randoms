import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { CompanyModel } from '../models';
import { CompanyService } from '../company.service';

@Component({
    selector: "company-detail",
    templateUrl: "./company.detail.component.html",
    styles: [],
})
export class CompanyDetail implements OnInit {
    company: CompanyModel;
    constructor(
        private companyService: CompanyService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.companyService.getCompany(+params['id']))
            .subscribe(company => this.company = company);
    }
}
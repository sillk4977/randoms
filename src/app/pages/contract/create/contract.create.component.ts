/// <reference path="../../../../../node_modules/@types/jquery/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ContractModel } from '../models';
import { CompanyService } from '../../company/company.service';
import { CompanyModel } from '../../company/models';

declare var jQuery: JQueryStatic;

@Component({
    selector: 'contract-create',
    templateUrl: './contract.create.component.html',
    styles: [],
})
export class ContractCreate implements OnInit {
    contract: ContractModel = new ContractModel();
    company: CompanyModel = new CompanyModel();

    constructor(
        private companyService: CompanyService,
        private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
        // init datepicker
        jQuery('.datetimepicker').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
        });

        // get company
        this.route.params
        .switchMap((params: Params) => this.companyService.getCompany(+params['id']))
        .subscribe(company => this.company = company);
    }
}
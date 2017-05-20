/// <reference path="../../../../../node_modules/@types/jquery/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ContractModel } from '../models';
import { ContractService } from '../contract.service';
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
        private contractService: ContractService,
        private route: ActivatedRoute,
        private router: Router,
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

    createContract(): void {
        var contract_id = this.contractService.createContract(this.contract);
        if (contract_id) {
            this.router.navigate(['/pages/contract/detail/', contract_id]);
        } else {
            alert("创建失败");
        }
    }
}

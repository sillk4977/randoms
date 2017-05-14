/// <reference path="../../../../../node_modules/@types/jquery/index.d.ts" />
declare var jQuery: JQueryStatic;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ContractModel } from '../models';
import { ContractService } from '../contract.service';

@Component({
    selector: 'contract-detail',
    templateUrl: './contract.detail.component.html',
    styles: [],
})
export class ContractDetail implements OnInit{
    contract: ContractModel = new ContractModel();

    editing: ContractModel = new ContractModel();
    edit: boolean = false;

    constructor(
        private contractService: ContractService,
        private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
        // init datepicker
        jQuery('.datetimepicker').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
        });

        this.route.params
        .switchMap((params: Params) => this.contractService.getContract(+params['id']))
        .subscribe(contract => this.contract = contract);
    }

    switchEdit(flag: boolean): void {
        console.log(typeof(this.contract.send_date.constructor.name));
        console.log(String(this.contract.send_date.toString));
        this.edit = flag;
        if(this.edit){
            this.editing = {
                id: this.contract.id,
                name: this.contract.name,
                plan: this.contract.plan,
                send_date: this.contract.send_date,
                sign_date: this.contract.sign_date,
                send_back_date: this.contract.send_back_date,
                effective_date: this.contract.effective_date,
                end_date: this.contract.end_date,
            } as ContractModel;
        }
    }
}

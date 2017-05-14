import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './contract.router';

import { Contract } from './contract.component';
import { ContractCreate } from './create/contract.create.component';
import { ContractDetail } from './detail/contract.detail.component';

import { CompanyService } from '../company/company.service';
import { ContractService } from './contract.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations: [
        Contract,
        ContractCreate,
        ContractDetail,
    ],
    providers: [
        CompanyService,
        ContractService,
    ]
})
export class ContractModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { companypagerouting } from './company.routing';
import { Company } from './company.component';
import { CompanyDetail } from './detail/company.detail.component';
import { CompanyCreate } from './create/company.create.component';
import { CompanyService } from './company.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        companypagerouting,
    ],
    declarations: [
        Company,
        CompanyDetail,
        CompanyCreate,
    ],
    providers: [
        CompanyService,
    ]
})
export class CompanyModule {}
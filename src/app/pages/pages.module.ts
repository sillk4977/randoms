import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { Pages } from './pages.component';
import { Company } from './company/company.component';
@NgModule({
    imports: [
        CommonModule,
        routing,
    ],
    declarations: [
        Pages,
    ],
    providers: [

    ]
})
export class PagesModule {

}

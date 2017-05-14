import { Routes, RouterModule } from '@angular/router';
import { Company } from './company.component';
import { CompanyDetail } from './detail/company.detail.component';
import { CompanyCreate } from './create/company.create.component';

const routes: Routes = [
    {
        path: '', 
        component: Company,
        children: [
            {path: 'detail/:id', component: CompanyDetail},
            {path: 'create', component: CompanyCreate},
        ]
    },
];
export const companypagerouting = RouterModule.forChild(routes);
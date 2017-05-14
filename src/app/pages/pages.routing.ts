import { Routes, RouterModule } from '@angular/router';

import { Pages } from './pages.component';
import { Company } from './company/company.component';
const routes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {path: '', redirectTo: 'company', pathMatch: 'full'},
            {path: 'company', loadChildren: './company/company.module#CompanyModule'},
            {path: 'contract', loadChildren: './contract/contract.module#ContractModule'},
        ]
    }
];
export const routing = RouterModule.forChild(routes);
import { Routes, RouterModule } from '@angular/router';

import { Contract } from './contract.component';
import { ContractCreate } from './create/contract.create.component';
import { ContractDetail } from './detail/contract.detail.component';

const routes: Routes = [
    {
        path: '',
        component: Contract,
        children: [
            {path: 'create/company/:id', component: ContractCreate},
            {path: 'detail/:id', component: ContractDetail},
        ],
    }
]

export const routing = RouterModule.forChild(routes);
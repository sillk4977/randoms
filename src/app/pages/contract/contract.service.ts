import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ContractModel } from './models';

import 'rxjs/add/operator/toPromise';

import { FormatDate } from '../../common/base';

const CONTRACT: ContractModel[] = [
   {
        id: 1,
        company_id: 1,
        name: '一个方案的名字',
        plan: '具体的方案',
        send_date: new FormatDate('2017-05-01'),
        sign_date: new FormatDate('2017-05-07'),
        send_back_date: new FormatDate('2017-05-11'),
        effective_date: new FormatDate('2018-01-01'),
        end_date: new FormatDate('2018-12-31'),
    },
    {
        id: 2,
        company_id: 2,
        name: '新的一个方案的名字',
        plan: '具体的方案',
        send_date: new FormatDate('2017-05-01'),
        sign_date: new FormatDate('2017-05-07'),
        send_back_date: new FormatDate('2017-05-11'),
        effective_date: new FormatDate('2018-01-01'),
        end_date: new FormatDate('2018-12-31'),
    },
    {
        id: 3,
        company_id: 2,
        name: '又新的一个方案的名字',
        plan: '具体的方案',
        send_date: new FormatDate('2017-05-01'),
        sign_date: new FormatDate('2017-05-07'),
        send_back_date: new FormatDate('2017-05-11'),
        effective_date: new FormatDate('2018-01-01'),
        end_date: new FormatDate('2018-12-31'),
    }
]


@Injectable()
export class ContractService {
    private headers = new Headers({"Content-type": "application/json"});

    constructor(
        private http: Http,
    ){}

    getContracts(companyId: number): Promise<ContractModel[]> {
        return this.http
        .get('/api/contract/company/' + companyId)
        .toPromise()
        .then(res => res.json() as ContractModel[])
    }

    getContract(id: number): Promise<ContractModel> {
        return this.http
        .get('/api/contract/' + id)
        .toPromise()
        .then(res => res.json() as ContractModel);
    }

    createContract(contract: ContractModel): Promise<number> {
        return this.http
        .post('/api/contract/', JSON.stringify(contract), {headers: this.headers})
        .toPromise()
        .then(function(res){
            if(res.status == 201){
                return res.json().id
            } else {
                return 0;
            }
        });
    }
}
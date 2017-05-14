import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CompanyModel } from './models';
import { ContractModel } from '../contract/models';

import 'rxjs/add/operator/toPromise'

import { FormatDate } from '../../common/base';

const COMPANY: CompanyModel[] = [
    {
        id: 1,
        name: "A Big Balloon Inc.",
        address: "Right here",
        contracts: [
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
            }
        ]
    },
    {
        id: 2,
        name: "Another Big Balloon Inc.",
        address: "Right there",
        contracts: [
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
    },
]

@Injectable()
export class CompanyService {
    private headers = new Headers({"Content-type": 'application/json'});
    constructor(
        private http: Http
    ){}
    getCompanies(): Promise<CompanyModel[]> {
        return Promise.resolve(COMPANY);
    }

    getCompany(id: number): Promise<CompanyModel> {
        return this.getCompanies().then(companies => companies.find(company => company.id === id));
    }

    createCompany(company: CompanyModel): void {
        this.http
        .post('/company/create', JSON.stringify(company), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as CompanyModel);
    }
}
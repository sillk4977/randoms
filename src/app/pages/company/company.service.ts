import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CompanyModel } from './models';
import { ContractModel } from '../contract/models';

import 'rxjs/add/operator/toPromise'

import { FormatDate } from '../../common/base';

@Injectable()
export class CompanyService {
    private headers = new Headers({"Content-type": 'application/json'});
    constructor(
        private http: Http
    ){}
    getCompanies(): Promise<CompanyModel[]> {
        return this.http
        .get('/api/company/')
        .toPromise()
        .then(res => res.json() as CompanyModel[]);
    }

    getCompany(id: number): Promise<CompanyModel> {
        return this.getCompanies().then(companies => companies.find(company => company.id === id));
    }

    createCompany(company: CompanyModel): void {
        this.http
        .post('/api/company/', JSON.stringify(company), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as CompanyModel);
    }
}

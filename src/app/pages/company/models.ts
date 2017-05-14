import { ContractModel } from '../contract/models';

export class CompanyModel {
    id: number;
    name: string;
    address: string;
    contracts: ContractModel[];
}
import { FormatDate } from '../../common/base';

export class ContractModel {
    id: number;
    company_id: number;
    name: string;
    plan: string;
    send_date: FormatDate;
    sign_date: FormatDate;
    send_back_date: FormatDate;
    effective_date: FormatDate;
    end_date: FormatDate;
}
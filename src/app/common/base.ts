export class FormatDate {
    constructor(public date: string){
        this._date = new Date(date);
        // this.toString = function(){
        //     return this.getFullYear + '-' + (this.getMonth() + 1) + '-' + this.getDate();
        // }
    }
    _date: Date;
    public toString(): string {
        var month = String(this._date.getMonth() + 1);
        var day = String(this._date.getDate());
        if(Number(month) < 10){
            month = '0' + month;
        }
        if(Number(day) < 10){
            day = '0' + day;
        }
        return this._date.getFullYear() + '-' + month + '-' + day;
    }
}

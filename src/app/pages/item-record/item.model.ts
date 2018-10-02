
export class Item{
    code: string;
    description: string;
    unit: string;
    price: number;
    pcs: number;
    out: string;
    status: any;

    constructor(item?){
        this.code = item.item_code;
        this.description = this.description;
        this.unit = item.unit;
        this.price = item.price;
        this.pcs = item.pcs;
        this.out = item.out;
        this.status = item.status;
    }
}

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
        this.description = item.item_desc;
        this.unit = item.unit;
        this.price = item.u_price;
        this.pcs = item.pcs;
        this.out = item.out;
        this.status = item.status;
    }
}
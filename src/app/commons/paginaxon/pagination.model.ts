export class Pagination{
    from: number;
    to: number;
    currentPage: number;
    total: number;
    data = [];

    constructor(pagination?){
        this.from = pagination.from;
        this.to = pagination.to;
        this.currentPage = pagination.currentPage;
        this.total = pagination.total;
        this.data = pagination.data;
    }
}
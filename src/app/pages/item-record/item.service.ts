import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService{

    constructor(private http: HttpClient){
        
    }
    getItems(): Observable<any>{
        return this.http.get('http://localhost:8000/api/items');
    }

    searchItem(item) : Observable<any>{
        return this.http.get('http://localhost:8000/api/search/' + item + '/20');
    }

    searchStocks(stocks): Observable<any>{
        return this.http.get('http://localhost:8000/api/stocks/search/Main/'+ stocks +'/50');
    }
}
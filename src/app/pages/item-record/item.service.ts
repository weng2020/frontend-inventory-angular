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
}
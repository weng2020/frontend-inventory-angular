import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

    private _filterText: any;
 
    get filterText(){
        return this._filterText;
    }

    addFilter(filter){
        this._filterText = filter;
    }

  
}
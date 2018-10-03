import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

    private _filterText: any;


    set filterText(filter){
        this._filterText = filter;
    }

    get filterText(){
        return this._filterText;
    }

}
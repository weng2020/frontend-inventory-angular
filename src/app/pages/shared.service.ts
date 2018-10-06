import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

    private _filterText: any = 1;
    private _currentUrl: any;
  
    set filterText(filter){
        this._filterText = filter;
    }

    get filterText(){
        return this._filterText;
    }

    set url(url: string){
        this._currentUrl = url;
    }

    get url(){
        return this._currentUrl;
    }



}
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

    private _filterText: any;
    private _currentUrl: any;
    private _items;

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

    set items(items){
        this._items = items;
    }

    get items(){
        return this._items;
    }


}
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

    private _filterText: any = '%20';
    private _currentUrl: any;
    private _pageNumber: number = 1;

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

    set pageNumber(pageNumber){
        this._pageNumber = pageNumber;
    }

    get pageNumber(){
        return this._pageNumber;
    }



}
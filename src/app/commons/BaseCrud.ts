import { OnInit } from '@angular/core';

export abstract class BaseCrudComponent implements OnInit{

    isNew: boolean;
    
    constructor(){}

    abstract onFormSave();

    ngOnInit(){
        
    }
}
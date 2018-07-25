import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  historique:string[]=[];
  constructor() { }
  gethistorique():Observable<string[]>{
    return of(this.historique);
  }
  addresulte(result:string):void{
    if(result.trim()!=''){
    this.historique.unshift(result);
    }
  }
}

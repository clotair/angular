import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExpressionService {
 
 reception:EventEmitter<string[]> =new EventEmitter();
  constructor() { }
  refresh(newExpressions:string[]):void{

      this.reception.emit(newExpressions);
    
  }

}

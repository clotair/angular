import { Component, OnInit } from '@angular/core';
import { BOUTONS, Bouton } from '../bouton';
import { Clavier } from '../recup';
import { ExpressionService } from '../expression.service'


@Component({
  selector: 'app-clavier',
  templateUrl: './clavier.component.html',
  styleUrls: ['./clavier.component.css']
})
export class ClavierComponent implements OnInit {
  clavier:Clavier=new Clavier();
  bouton:Bouton;
  onBSelect;
  BUTTONS = BOUTONS;
  constructor(expressionService:ExpressionService) {
    addEventListener('keypress',(e)=>{
      this.clavier.handleKeyboardEvent(e);
      console.log([this.clavier.expressionl,this.clavier.expressionr])
 
      expressionService.refresh([this.clavier.expressionl,this.clavier.expressionr]);
 
      
    });
    this.onBSelect=function(bouton:Bouton){
      this.clavier.onSelect(bouton)

          expressionService.refresh([this.clavier.expressionl,this.clavier.expressionr]);
        
    }
   }

  ngOnInit() {
  }

}

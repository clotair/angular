import { Component, OnInit } from '@angular/core';
import { BOUTONS, Bouton } from '../bouton';
import { Clavier } from '../recup';
import { ExpressionService } from '../expression.service';
import { MessageService } from '../message.service';


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
  constructor(expressionService:ExpressionService, messageService:MessageService) {
    addEventListener('keypress',(e)=>{
      this.clavier.handleKeyboardEvent(e);
      console.log([this.clavier.expressionl,this.clavier.expressionr])
      expressionService.refresh([this.clavier.expressionl,this.clavier.expressionr]);
      if(this.clavier.prev_operation){
        messageService.addresulte(this.clavier.prev_value);
        console.log(this.clavier.prev_operation);
        
      }
      
    });
    this.onBSelect=function(bouton:Bouton){
      this.clavier.onSelect(bouton)

          expressionService.refresh([this.clavier.expressionl,this.clavier.expressionr]);
          if(this.clavier.prev_operation){
            messageService.addresulte(this.clavier.prev_value);
            console.log(this.clavier.prev_operation);
          }
    }
   }

  ngOnInit() {
  }

}

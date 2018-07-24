import { Component, OnInit } from '@angular/core';
import { ExpressionService } from '../expression.service'

@Component({
  selector: 'app-ecran',
  templateUrl: './ecran.component.html',
  styleUrls: ['./ecran.component.css']
})
export class EcranComponent implements OnInit {
  expressionl='';
  expressionr='';
  constructor(expressionService:ExpressionService) {
    expressionService.reception.subscribe(e=>{
      this.expressionl=e[0];
      this.expressionr=e[1];
    });
    
   }

  ngOnInit() {
  }

}

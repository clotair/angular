import { Bouton } from './bouton';



export class Clavier{
 expressionl:string='';
 expressionr:string='';
 expression:string='';
 prev_operation=false;
 prev_value
 private prevVp;    
 onSelect(bouton:Bouton){
   if(this.prev_operation){
    this.prev_operation=false;
     this.prev_value=this.expressionl;
     switch(bouton.id){
      case 'diviser' :case 'mult': case 'pourcentage': case 'plus': case 'soust':
      this.expressionl = `${this.expressionl} ${bouton.value}`;
      break;
      default:
      this.expressionl='';
      this.onSelect(bouton);
      break;
     }
      
   }else{switch(bouton.id){
     case 'diviser' :case 'mult': case 'pourcentage': case 'plus':
     switch(this.expressionl.substr(-1,1)){
      case '/': case '*': case '%': case '+': case '-': 
      break;
      case '(':
      break;
      default:
      this.expressionl = `${this.expressionl} ${bouton.value}`;
      break;
    }
     break;
     case 'sup': 
      switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '%': case '+': case '-':
        this.expressionl = this.expressionl.substr(0,this.expressionl.length-2);
        break;
        case ' ':
        this.expressionl = this.expressionl.substr(0,this.expressionl.length-3);
        break;
        default:
        this.expressionl = this.expressionl.substr(0,this.expressionl.length-1);
        break;
      }

     break;
     case 'point':
      let i=this.expressionl.length;
      this.prevVp=false;
      while(i>0&&this.expressionl[i-1]!=' '){
        if(this.expressionl[i-1]=='.'){
          this.prevVp=true;
        }
        i--;
      }
      if(this.expressionl.length!=0){
      if(!this.prevVp){
        switch(this.expressionl.substr(-1,1)){
          case '/': case '*': case '+': case '-':
          case '(': case ')':
          break;
          default:
          this.expressionl = `${this.expressionl}${bouton.value}`;
          break;
        }
        this.prevVp=true;
      }
    }
     break;
     case 'soust':
     switch(this.expressionl.substr(-1,1)){
       case '/': case '*': case '+': case '-':
       break;
       case '(': case ')':
       this.expressionl = `${this.expressionl} ${bouton.value}`;
       break;
       default:
       this.expressionl = `${this.expressionl} ${bouton.value}`;
       break;
     }

     break;
     case 'pO':
      if (this.expressionl.length==0)
      {
       this.expressionl=`${this.expressionl}${bouton.value}`;
      }
      else
      {
       switch(this.expressionl.substr(-1,1)){
       case '/': case '*': case '%': case '+': case '-':
       this.expressionl = `${this.expressionl} ${bouton.value}`;
       break;
       case '(':
       this.expressionl = `${this.expressionl} ${bouton.value}`;
       break;
       case ')':
       this.expressionl = `${this.expressionl} * ${bouton.value}`;
       case ' ': this.expressionl=`${this.expressionl}${bouton.value}`;
       break;
       default:
       this.expressionl = `${this.expressionl} * ${bouton.value}`;
       break;
       }
     }
      break; 
     case 'pF': 
     switch(this.expressionl.substr(-1,1)){
      case '/': case '*': case '+': case '-':case '(':
      break;
      default:
      this.expressionl = `${this.expressionl} ${bouton.value}`;
      break;
    }
     break;
     case 'egale': 
     this.expression=this.expressionl+this.expressionr;
     this.expressionl=this.eval(this.expression.split(' '));
     this.prev_operation=true;
     this.expressionr='';
     break;
     default: 
     switch(this.expressionl.substr(-1,1)){
      case '/': case '*': case '%': case '+': case '-': case '(':
      this.expressionl = `${this.expressionl} ${bouton.value}`;
      break;
      case ')':
      this.expressionl = `${this.expressionl} * ${bouton.value}`;
      break;
      default:
      this.expressionl = `${this.expressionl}${bouton.value}`;
      break;
    }
     break;
    
      
     
  
}
  
   }
  }
  handleKeyboardEvent(event: KeyboardEvent) {
    if(this.prev_operation){
      this.prev_operation=false;
       this.prev_value=this.expressionl;
       switch(event.key){
        case 'diviser' :case 'mult': case 'pourcentage': case 'plus': case 'soust':
        this.expressionl = `${this.expressionl} ${event.key}`;
        break;
        default:
        this.expressionl='';
        this.handleKeyboardEvent(event);
        break;
       }
        
     }else{ 
  switch(event.key){
    case '/' :case '*': case '%': case '+':
    switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '%': case '+': case '-': 
        break;
        case '(':
        break;
        default:
        this.expressionl = `${this.expressionl} ${event.key}`;
        break;
      }
    break;
    case 'Backspace': 
    switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '%': case '+': case '-':
        this.expressionl = this.expressionl.substr(0,this.expressionl.length-2);
        break;
        case ' ':
        this.expressionl = this.expressionl.substr(0,this.expressionl.length-3);
        break;
        default:
        this.expressionl = this.expressionl.substr(0,this.expressionl.length-1);
        break;
      }
    break;
    case '.':
    let i=this.expressionl.length;
    this.prevVp=false;
    while(i>0&&this.expressionl[i-1]!=' '){
      if(this.expressionl[i-1]=='.'){
        this.prevVp=true;
      }
      i--;
    }
    if(this.expressionl.length!=0){
    if(!this.prevVp){
      switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '+': case '-':
        case '(': case ')':
        break;
        default:
        this.expressionl = `${this.expressionl}${event.key}`;
        break;
      }
      this.prevVp=true;
    }
  }
    break;
    case '-':
    switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '+': case '-':
        break;
        case '(': case ')':
        this.expressionl = `${this.expressionl} ${event.key}`;
        break;
        default:
        this.expressionl = `${this.expressionl} ${event.key}`;
        break;
      }
    break;
    case '(':
    if (this.expressionl.length==0)
    {
     this.expressionl=`${this.expressionl}${event.key}`;
    }
    else
    {
     switch(this.expressionl.substr(-1,1)){
     case '/': case '*': case '%': case '+': case '-':
     this.expressionl = `${this.expressionl} ${event.key}`;
     break;
     case '(':
     this.expressionl = `${this.expressionl} ${event.key}`;
     break;
     case ')':
     this.expressionl = `${this.expressionl} * ${event.key}`;
     case ' ': this.expressionl=`${this.expressionl}${event.key}`;
     break;
     default:
     this.expressionl = `${this.expressionl} * ${event.key}`;
     break;
     }
   }
     
     break; 
    case ')': 
      switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '+': case '-':case '(':
        break;
        default:
        this.expressionl = `${this.expressionl} ${event.key}`;
        break;
      }
      
     
    
    break;
    case '=': case 'Enter':
    this.expression=this.expressionl+this.expressionr;  
    this.expressionl=this.eval(this.expression.split(' '));
    this.prev_operation=true;
    this.expressionr='';
    break;
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': 
    switch(this.expressionl.substr(-1,1)){
        case '/': case '*': case '%': case '+': case '-': case '(':
        this.expressionl = `${this.expressionl} ${event.key}`;
        break;
        case ')':
        this.expressionl = `${this.expressionl} * ${event.key}`;
        break;
        default:
        this.expressionl = `${this.expressionl}${event.key}`;
        break;
    }
    break;
    default:
    ;
}
     }
  }
  eval(expression:string[]){
    this.sup_espace(expression);
    console.log(expression);
    let le = expression.length-1;
    if(expression[0]=='('&&expression[le]==')'){
     expression.splice(0,1);
     expression.splice(le,1);
     le-=2;
    }
    let indexpo=expression.lastIndexOf('(');
    let indexpf=expression.indexOf(')');
    let numpo=0;
    let numpf=0;
    if(indexpo+1==indexpf){
      return "erreur";
    }
    for(let i = 0;i<=le;i++){
      if(expression[i]=='('){
        numpo++;
      }
      if(expression[i]==')'){
        numpf++;
      }
      if(numpo<numpf){
        return "erreur";
      }
    }
    while(indexpo!=-1){
      let u = Array();
      u = expression.splice((indexpo+1),(indexpf-indexpo));
      u.unshift('(');
      console.log(u + 'valeur de u');
      console.log(expression);

      expression[indexpo]=this.eval( u);
      indexpo=expression.lastIndexOf('(');
      indexpf=expression.indexOf(')');
    }
    for(let i = 0;i<expression.length;i++){ 
      if(expression[i]=='%'){
       let u = expression.splice(i,1);
       let v =expression[i-1];
      expression[i]=(parseFloat(v)/100)+'';
      }
    }
    for(let i = 0;i<expression.length;i++){
      if(expression[i]=='*'){
    let u = expression.splice(i,2);
    let v =expression[i-1];
    expression[i]=(parseFloat(v) * parseFloat(u.pop()))+'';
      }
    }
      
      for(let i = 0;i<expression.length;i++){
        if(expression[i]=='/'){
        let u = expression.splice(i,2);
        if(u[1]=='0'){
         return "math error";
        }else{
         let v =expression[i-1];
          expression[i]=(parseFloat(v) / parseFloat(u.pop()))+'';
       }
      }
  
      for(let i = 0;i<expression.length;i++){
        if(expression[i]=='+'){
          
           let u = expression.splice(i,2);
           let v =expression[i-1];
           expression[i]=(parseFloat(v) + parseFloat(u.pop()))+'';
          }
        }
        for(let i = 0;i<expression.length;i++){
          if(expression[i]=='-'){
           let u = expression.splice(i,2);
            if(i-1<0){
              expression[i]=( - parseFloat(u.pop()))+'';
            }else{
             let v =expression[i-1];
              expression[i]=(parseFloat(v) - parseFloat(u.pop()))+'';
            }
          }
        }
   
  }
   return expression.pop();
  }
  sup_espace(expressions:string[]){
    expressions.forEach((v,i)=>{
      if(v==''){
        expressions.splice(i,1);
      }
    })
  }
}
 

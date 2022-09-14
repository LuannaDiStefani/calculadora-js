var a = " ";
var ope;

var max = 8;

operadores = new Array(max);
armazenar = new Array(max);
 
var topoope = 0; 
var toponum = 0;




function inserir(num){
    
 var numa = num;

   
if(numa >= 0){
    
a = a + num;

var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num;
    
var nume = document.getElementById('visualizar').innerHTML ;
document.getElementById('visualizar').innerHTML = nume + num ; 
    
 } else if ( num != '='){

armazenar[toponum] = a;
toponum++; 
a = "";     

ope = num;
operadores[topoope] = ope;  

   
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num;   
document.getElementById('resultado').innerHTML = "";

var nume = document.getElementById('visualizar').innerHTML;
document.getElementById('visualizar').innerHTML = nume + "\n" + num + "\n"; 
     
     
calcular();
     
}else{

 armazenar[toponum] = a;
 a = ""; 

igual ();  

}     
}


function calcular(){

if(topoope >= 1){
    
  
if((operadores[0] == '*' ) || (operadores[0] == '/') || (operadores[0] == '%') ){

 var caso = operadores[0];

 switch(caso){

    case '*':   

    toponum--;         
    var n1 = armazenar[toponum];
    armazenar[toponum]= null;                  
    
    toponum--;       
    var n2 = armazenar[toponum];           
    armazenar[toponum] = null; 
            
    var r = parseInt(n2) * parseInt(n1);              
    armazenar[toponum] = r;
    toponum++;

    var subs = operadores[topoope];
    operadores[topoope] = null;
    topoope--;
    operadores[topoope] = subs;
    topoope++; 

    break

    case '/':   

    toponum--;         
    var n1 = armazenar[toponum];
    armazenar[toponum]= null;                  
    
    toponum--;       
    var n2 = armazenar[toponum];           
    armazenar[toponum] = null; 
            
    var r = parseInt(n2) / parseInt(n1);              
    armazenar[toponum] = r;
    toponum++;

    var subs = operadores[topoope];
    operadores[topoope] = null;
    topoope--;
    operadores[topoope] = subs;
    topoope++; 

    break

    case '%':   

    toponum--;         
    var n1 = armazenar[toponum];
    armazenar[toponum]= null;                  
    
    toponum--;       
    var n2 = armazenar[toponum];           
    armazenar[toponum] = null; 
            
    var r = parseInt(n2) % parseInt(n1);              
    armazenar[toponum] = r;
    toponum++;

    var subs = operadores[topoope];
    operadores[topoope] = null;
    topoope--;
    operadores[topoope] = subs;
    topoope++; 

     break
    
}
} else if((operadores[0] == '+') || (operadores[0] == '-') ){

   if((operadores[1] == '+') || (operadores[1] == '-' )){ 
 
       var casos = operadores[0];
 
       switch(casos){

       case '+':

       toponum--;
       var n1 = armazenar[toponum];
       armazenar[toponum] = null;

       toponum--;
       var n2 = armazenar[toponum];
       armazenar[toponum] = null;

       var r = parseInt(n2) + parseInt(n1);
       armazenar[toponum] = r;
       toponum++;

       var subs = operadores[topoope];
       operadores[topoope] = null;
       topoope--;
       operadores[topoope] = subs;
       topoope++; 

       break

       case '-':

        toponum--;
        var n1 = armazenar[toponum];
        armazenar[toponum] = null;
 
        toponum--;
        var n2 = armazenar[toponum];
        armazenar[toponum] = null;
 
        var r = parseInt(n2) - parseInt(n1);
        armazenar[toponum] = r;
        toponum++;
 
        var subs = operadores[topoope];
        operadores[topoope] = null;
        topoope--;
        operadores[topoope] = subs;
        topoope++;
     
        break

 }
} else if((operadores[1] == '*') || (operadores[1] == '/') || (operadores[1] == '%')){

 precedencia();

 }
}

} else {    
    
topoope++;   

}       
}


function precedencia(){


if(topoope > 1){

var amz = operadores[topoope];
operadores[topoope] = null;
topoope--;

var casos = operadores[topoope];

switch(casos){

case '*':

toponum--;
var n1 = armazenar[toponum];
armazenar[toponum] = null;

toponum--;
var n2 = armazenar[toponum];
armazenar[toponum] = null

var r = parseInt(n2) * parseInt(n1);
armazenar[toponum] = r;
toponum++;

operadores[topoope] = amz;

calcular();

break

case '/':

toponum--;
var n1 = armazenar[toponum];
armazenar[toponum] = null;

toponum--;
var n2 = armazenar[toponum];
armazenar[toponum] = null

var r = parseInt(n2) / parseInt(n1);
armazenar[toponum] = r;
toponum++;

operadores[topoope] = amz;

calcular();

break

case '%':

toponum--;
var n1 = armazenar[toponum];
armazenar[toponum] = null;

toponum--;
var n2 = armazenar[toponum];
armazenar[toponum] = null

var r = parseInt(n2) % parseInt(n1);
armazenar[toponum] = r;
toponum++;

operadores[topoope] = amz;

calcular();

break

}
}else{

topoope++;

}
}

var total = 0; 

function igual(){

 topoope--;

   var caso = operadores[topoope];
 
   if(topoope == 0){

   switch(caso){

    case '*':   
        
    var n1 = armazenar[toponum];
    armazenar[toponum]= null;                  
    
    toponum--;       
    var n2 = armazenar[toponum];           
    armazenar[toponum] = null; 
            
    total = parseInt(n2) * parseInt(n1);         
   
   break


   case '/':   
        
   var n1 = armazenar[toponum];
   armazenar[toponum]= null;                  
   
   toponum--;       
   var n2 = armazenar[toponum];           
   armazenar[toponum] = null; 
           
   total = parseInt(n2) / parseInt(n1); 

   break


   case '%':   
        
   var n1 = armazenar[toponum];
   armazenar[toponum]= null;                  
  
   toponum--;       
   var n2 = armazenar[toponum];           
   armazenar[toponum] = null; 
           
   total = parseInt(n2) % parseInt(n1);             
 
   break

    case '+':   
        
   var n1 = armazenar[toponum];
   armazenar[toponum]= null;                  
 
    toponum--;       
   var n2 = armazenar[toponum];           
   armazenar[toponum] = null; 
         
    total = parseInt(n2)  + parseInt(n1);             

   break
 
   case '-':   
        
    var n1 = armazenar[toponum];
    armazenar[toponum]= null;                  
    
    toponum--;       
    var n2 = armazenar[toponum];           
    armazenar[toponum] = null; 
            
    total = parseInt(n2) - parseInt(n1); 

   break

   }  

   }else{

    calc();
 
     }
 
  var b = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = " = " + total;
  
  var nume = document.getElementById('visualizar').innerHTML;
  document.getElementById('visualizar').innerHTML = total; 
  
 }

 

  function calc(){

   var caso = operadores[topoope];

   switch(caso){
      
      case '*':
       
       var n1 = armazenar[toponum];
       armazenar[toponum] = null;

       toponum--;
       var n2 = armazenar[toponum];
       armazenar[toponum] = null;

       r  = parseInt(n2) * parseInt(n1);
       armazenar[toponum] = r;
       operadores[topoope] = null;
   
       igual();

       break

       case '/':
      
         var n1 = armazenar[toponum];
         armazenar[toponum] = null;
  
         toponum--;
         var n2 = armazenar[toponum];
         armazenar[toponum] = null;
  
         r  = parseInt(n2) / parseInt(n1);
         armazenar[toponum] = r;
     
         operadores[topoope] = null;
     
         igual();
  
         break

         case '%':
       
       var n1 = armazenar[toponum];
       armazenar[toponum] = null;

       toponum--;
       var n2 = armazenar[toponum];
       armazenar[toponum] = null;


       r  = parseInt(n2) % parseInt(n1);
       armazenar[toponum] = r;
   
       operadores[topoope] = null;
   
       igual();

       break

      }

  }

  function limpar(){

for(cont = 0; cont <= max; cont++){

armazenar[toponum] = null;
toponum--;

operadores[topoope] = null;
topoope--;

document.getElementById('resultado').innerHTML = "";
    
document.getElementById('visualizar').innerHTML = "";


}
 }
function inserir(num){
    
var numa = num;
    
 if(numa >= 0 ){
     
var numero = document.getElementById('resultado').innerHTML ;

document.getElementById('resultado').innerHTML = numero + num;
 
var nume = document.getElementById('visualizar').innerHTML ;

document.getElementById('visualizar').innerHTML = nume + num ; 
    
 }else{
     
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num;
     
document.getElementById('resultado').innerHTML = "";

var nume = document.getElementById('visualizar').innerHTML;
document.getElementById('visualizar').innerHTML = nume + "\n" + num + "\n";     
   
 }
}


function excluir(){

document.getElementById('resultado').innerHTML = "";
    
document.getElementById('visualizar').innerHTML = "";

}


    
    

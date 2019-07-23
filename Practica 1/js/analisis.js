

var textoEntrada= document.getElementById("texto");//obtenemos la palabra ingresada en la pagina

var ascii=0;//guarda el valor ascii de cada caracter de la palabra ingresada
var tipo;//guarda el tipo de token de la palabra ingresada
var bandera=false;//nos sirven para llegar a un estado de error

function analizar(){
    
    bandera=false;//reinicar la varible cada ves que analizamos
    if(!textoEntrada.value==""){
       
        for(var i=0; i<textoEntrada.value.length; i++){//vamos a recorrer caracter por caracter la palabra
           
            ascii=textoEntrada.value.charCodeAt(i);//convertimos a codigo ascii el caracter analizado
            tipo=comprobarTipo(ascii);//comprobamos el token y se lo asignamos a tipo
            
            if(tipo==="error"){//cuando lleguemos a un estado de error
                bandera=true//usamos nuestra bandera
            }
        }

        if(!bandera){// la bandera se encuentre fuera del estado de error (true)
            if(tipo==="letra" && bandera==false){//si tipo nos devolvio token letra
            imprimir("correctas","Identificador");
            }else if(tipo==="digito" && bandera==false){//si nos devuelve token digito
            imprimir("correctas","Digito");
            }else if(tipo==="simbolo" && bandera==false){//si nos devuelve token simbolo
            imprimir("correctas","Simbolo");
            }
        }else{//si la bandera esta en estado de error (false)
        imprimir("incorrectas","Error");
        }  

        textoEntrada.value="";
        textoEntrada.focus();      
    }
}

//funcion que detecta el espacio para avisarle al compa que no lo haga
function space(event){
 
    if (event.keyCode == 32 || event.which == 32){
        textoEntrada.value="";
        alert('no lo haga compa');  
        textoEntrada.value.trim();
    }
    
}

//funcion para confirmar si se recargara la pagina para un analisis en limpio
function preguntar(){
    var preg = confirm("Se Perderan todas las palabras analizadas!, Estas Seguro?");
    
    if (preg == true) {
       location.reload();
       alert("La recargo el compa");
    } else {
       alert("No la recargo el compa");
    }
}

//funcion para analizar la palabra al presionar enter
function enter(event){
    if (!textoEntrada.value==""){
        if (event.keyCode == 13 || event.which == 13){
            analizar();
        }
    }
}
function imprimir(tabla,tipo){//metodo para llenar las listas de las palabras analizadas
    document.getElementById(tabla).innerHTML =document.getElementById(tabla).innerHTML + "<li class=\"list-group-item\">"+textoEntrada.value+"-->"+tipo+"</li>";
}
//ahora si se viene lo chido :v

function comprobarTipo(texto){//nos devuelve un string indicando el tipo de token
    
    //comparamos que la primera posicion de la palabra sea una letra mayuscula o minuscula
    if((textoEntrada.value.charCodeAt(0)>=97 && textoEntrada.value.charCodeAt(0)<=122) 
    || (textoEntrada.value.charCodeAt(0)>=65 && textoEntrada.value.charCodeAt(0)<=90)){
        //si cumple con ser una letra el primer caracter
        //comparamos que los siguientes caracteres sigan siendo letras o numeros
        if((texto>=97 && texto<=122) || (texto>=65 && texto<=90) || texto>=48 && texto<=57){
		    return("letra");
        
        }else {//si algun caracter no cumple nos vamos a un estado de error
           
            return("error");        
        }
    //comparamos que el primer caracter sea un numero        
    }else if((textoEntrada.value.charCodeAt(0)>=48 && textoEntrada.value.charCodeAt(0)<=57) ){
    
        if(texto>=48 && texto<=57){//si cumple, continua comparando que la palabra contenga solo numeros
            return("digito");
        
	    }else {
            return("error");
        }
    //comparamos que el primer caracter sea un simbolo    
    }else if(textoEntrada.value.charCodeAt(0)>=35 && textoEntrada.value.charCodeAt(0)<=37 ) {
       
        if(texto>=35 && texto<=37){
            return("simbolo");
        
	    }else{
            return("error");
        }
    
    }else{
        return("error");
    }
   
}

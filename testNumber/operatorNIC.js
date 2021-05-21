//Este Script es para conocer la operadora de manera offline, aun falta conseguir el rango de prefijos para
//saber cuando un numero es de Cootel, aun sigo buscando por la web, para dar un resultado mas exacto 
//con este metodo habra que crear un diccionario de prefijos para consumirlo desde aca
//Aun en proceso, puede presentar fallos!

var claro = [5740,5749,5780,5789,5800,5849,8330,8339,8350,8369,8400,8449,8490,8499,8500,8549,8600,8669,8700,8749,8820,8859,8900,8949,7555];
var tigo = [7710,7719,7750,7759,7870,7879,8150,8159,8260,8269,8320,8329,8370,8399,8450,8489,8550,8559,8590,8599,8670,8689,8750,8765,8779,8800,8819,8860,8899,8950,8979,8990,8999];

function knowOperator(){
    var captureNumber = document.getElementById("telNumber").value;
    console.log("Numero Completo: "+captureNumber);
    var shortCapturedNumber = captureNumber.substring(0,4);
    console.log("Rango de Interes: "+shortCapturedNumber); 

    if(captureNumber != null){
        claro.forEach(function(valor,indice,array){
            if(shortCapturedNumber==valor){
                var result = document.getElementById("operatorText").innerHTML="Es Claro";
                console.log("Es Claro");
            }
            else{
                tigo.forEach(function(valor,indice,array){
                    if(shortCapturedNumber==valor){
                        var result = document.getElementById("operatorText").innerHTML="Es Tigo";
                        console.log("Es Tigo");
                    } 
                });
                var result = document.getElementById("operatorText").innerHTML="No Pertenece a ningún Operador :C";
                console.log("Pertenece a otra operadora");
            }
            
        });
    }

}
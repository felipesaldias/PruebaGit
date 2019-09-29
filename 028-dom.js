'use strict'
//document.write("<script type='text/javascript' src='026-arreglos-multi.js'> </script>");

function cambiarColor(color){
    caja.style.background = color;
};


//COMO REFERENCIAR UNA ETIQUETA EXISTENTE

//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");
//var caja2 = document.getElementById("miCaja2");


caja.innerHTML=caja.innerHTML+", texto en la caja desde js";
//caja2.innerText=caja2.innerText+", texto en la caja desde js";
//caja.style.background = "red";
//cambiarColor("yellow");
caja.className="hola2";


//OBTENER ELEMENTOS POR SU TAG
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr= document.createElement("hr");


for (var valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");  // crea un objeto etiqueta <p> para utilizar en html
        var texto = document.createTextNode(todosLosDivs[valor].textContent);  //crear un objeto que almacena texto
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);

// OBTENER TODOS LOS ELEMENTOS DE UNA CLASE 

var divRojos = document.getElementsByClassName('rojo');
var divAmarillos= document.getElementsByClassName('amarillo');
console.log(divRojos);
console.log(divRojos[0].textContent);
for(var di in divRojos){
    if(divRojos[di].className){
        divRojos[di].style.background="red";
    }
}

var pis= document.getElementsByTagName("p");
console.log(pis);
for(var piii in pis){
    if(typeof pis[piii].textContent == 'string'){
        pis[piii].style.background="light blue";
    }
}

var dd = document.querySelectorAll('div');
console.log(dd);

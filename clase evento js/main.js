const h1=document.querySelector("h1");
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const btn=document.querySelector("#btncalcular");
const parraforesultado=document.querySelector("#resultado");
const formulario=document.querySelector("#form");

//btn.addEventListener("evento", funcion)
btn.addEventListener("click",funcalcula)
function funcalcula(evento) {

  console.log({evento});
  evento.preventDefault();
  const operacion=input1.value + input2.value
    parraforesultado.innerHTML="resultado es: "+operacion;
} 





// Tienes un array de objetos que representan datos de productos con los siguientes atributos:

// name
// price
// stock
// Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

// Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

// array: Un array de objetos.
// Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

Ejemplo:


Input:
var array=[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

function addNewAttr(array) {
    for (let i = 0; i < array.length; i++) {
      array[i].taxes=parseInt(array[i].price*0.19);
    }  
    return array
  }
  
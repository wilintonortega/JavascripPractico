
// var objsus={
//     Free:"Solo puedes tomar los cursos gratis",
//     Basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
//     Expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
//     ExpertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
// }
// function suscripcion(elegir) {
//     if(objsus[elegir]){
//         (objsus[elegir]);
//         return;
//     }    
//     console.warn("Error");
// }
// suscripcion("Expert");

                        /*  D O M */

const h1 = document.querySelector('h1');
const p=document.querySelector("p");
const cpa=document.querySelector(".cpa");
const idpa=document.querySelector("#idpa");
const input=document.querySelector("input");

console.log(h1);
console.log(p);
console.log(cpa);
console.log(idpa);
console.log(input);

console.log({
    h1,
    p,
    cpa,
    idpa,
    input,

});
h1.innerHTML="Titulo secundario <br> segundo intento, ;{";
//h1.innerText="Titulo secundario <br> segundo intento, ;{"
input.value="Valores insertados en el input";
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class","clasemod");
h1.classList.add("titulo");
//h1.classList.remove("defecto");
//h1.classList.add("defecto");
h1.classList.toggle
const img=document.createElement("img");
img.setAttribute("src",'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img)

idpa.append(img);

// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// console.log(img);

// pid.replaceWith(img);
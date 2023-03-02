//DOM => document object model
//getElementById

/*const h1= document.getElementById("encabezado")
console.log(h1)


//QuerySelector=> etiqueta, clase, name, id....

const encabezado= document.querySelector("h1")//elemento
const p= document.querySelector(".parrafo")//clase
const inputText= document.querySelector("#nombre")//id

console.log(encabezado)

console.log(inputText)
//modificar texto

//innerHtml
//p.innerHTML= "<b>sy el texto modificado desde Javascript</b>"

//innnertext=> no deja modificar como el html.... lo toma cmo texto... si yo pusiera la <b>, me muestra esto <b>sy el texto modificado desde Javascript</b>"
// += sumar algo... sirve para sumar texto al que ya xiste en html
//p.innerText= "soy el texto modificado desde Javascript"

const nombreUsuario= "Indra Lima"

p.innerText += ` ${nombreUsuario}`//hay que sumarle el espacio
console.log(p)
//style=> tienen prioridad sobre los estilos de css porque es en linea
h1.style.color = "red"
h1.style.display="block"

//para  odificiar algo necesito
const imagen= document.querySelector("#meme")
imagen.innerText= "Hola"
imagen.style.backgroundImage= "url(https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg)"
*/
//classslist
/*const blueBox= document.querySelector(".azul")
const orangeBox= document.querySelector(".naranja")
blueBox.classList.add("grande")
//orangeBox.classList.remove("naranja")

//toggle=> si la clase existe la mantiene, si no la crea
const cambiarTamaño= ()=>{
    blueBox.classList.toggle("grande")
}
//contains= similar al includes. pregunta si la variable incluye "algo"
//devuelve un booleano si la clase contiene el elemtno q le preguntamos
blueBox.classList.contains("azul") //true*/

//Modificando atributos
const password=document.querySelector("#passwordId")
console.log(password.id)
console.log(password.name)
console.log(password.type)

//setAttribute getAttribute removeAttribute

password.setAttribute("class", "azul")
password.getAttribute("name")
password.removeAttribute("name")

//trick and tip
//usando esta funcion puedo acceder a todos los elementos del documnto
//funcion que retorna elementos de html segun el argumeno que reciba
 const $=(selector) => document.querySelector(selector)
$("#passwordId").type= "text"

$(".azul").classList.add("grande")








































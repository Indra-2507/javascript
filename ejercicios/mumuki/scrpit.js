//primero Mumuki, aca da bien, alla no
/*const saludo=document.querySelector("h1")

let nombre=prompt("Ingresa tu nombre")

saludo.innerText +=(`Hola ${nombre}. Te damos la bienvenida.`)
 //segundo Mumuki

/*const body= document.querySelector("body")

let color = prompt("Ingresá un valor hexadecimal")

body.style.backgroundColor = `${color}`

const body= document.querySelector("body")
let red= prompt ("Ingresa un valor rgb del 0 al 255")
  let green= prompt ("Ingresa un valor rgb del 0 al 255")
  let blue= prompt ("Ingresa un valor rgb del 0 al 255")

 let rgb= `rgb(${red},${green},${blue})`

body.style.backgroundColor = `${rgb}`
const img=document.querySelector("img")

let consulta= prompt ("Ingresa el tamaño de la imagen: chica, mediana, grande")

  if (tamanio === chica){
 img.style.width= "200px"}
  if(tamanio === mediana){
  img.style.width ="500px"
  }
  if(tamanio ===grande){
  img.style.width ="800px"}*/

  //$("#imagen").style.width="200px=> con la funcion de Pili"

 /* const h1=document.querySelector("h1")
const consulta= prompt ("Ingrese la temperatura actual")

h1.innerText= (`La temperatura es ${consulta}`)

if (consulta < 0 ){
h1.style.color= "rgb(0, 0, 255)"
}
 if(consulta >= 0 && consulta <15){
h1.style.color="rgb(0, 170, 228)"}

 if(consulta >= 15 && consulta <25){
h1.style.color="rgb(0, 255, 0)"}

 if(consulta >= 25 && consulta <30){
h1.style.color="rgb(255, 255, 0)"}

 if(consulta >= 30 && consulta <35){
h1.style.color="rgb(255, 128, 0)"}

if (consulta = 35)
{h1.style.color="rgb(255, 0, 0)"}*/
const $=(selector)=>{document.querySelector(selector)}
const porcentaje =prompt ("Ingrese el progreso:")

const barra= document.querySelector("#barra")
barra.style.width = `${porcentaje}%`

if (porcentaje > "100%"){
  barra.style.width=" 100%"
}
if (porcentaje < "0%"){
  barra.style.width=" 0%"
}











/*condionales-- segun una condicion, pasa esto... sino, pasa lo otro
if (condicion){
    //bloque de codigo que se ejecuta si la condicion se cumple
}
//existen ciertos tipos de datos que equivalen a true y false*/

let number= 10
let firstname= ""
//con strings la condicion se cumple:true
/*if (firstname){
    console.log ("Se cumplio la condicion")
    
}*/
//si el string esta vacio, no se cumple
//true=1
//false=0- el false es un cero, por eso se interpreta como falso
//con numbers si la condicion se cumple,va a ser un thruthy, si el numero es 0, va a ser un falsy

/*if (firstname){
    console.log ("Se cumplio la condicion")
    
}
let boolean =true

if (boolean){
    console.log("Me ejecute")
}
//undefined da falsy
let indefinido= undefined
 if (indefinido){
    console.log ("aca estoy")
 }

 let nulo=null
 //el null da false y el NaN tmb es falso
 if(nulo){
    console.log("hola")
 }

/*if (condition) {
    //esto de aca
} else {
    //sino, se ejecuta este
}


//operadores de comparacion: cooperar un dato con otro y nos devuelve un true/false y lo usamos en lo condicionales
let numero1=10
let numero2=20
let numeroString= "10"

//igualdad == 
console.log(numero1==numero2) //false
console.log(numero1==10) //true
console.log(numero1==numeroString)//true- la igualdad solo compara el valor, no importa que uno sea numero y otro sea string, con la igualdad estricta esto no sucede

//igualdad estricta
console.log(numero1===numero2)//false
console.log(numero1===10)//true
console.log(numero1===numeroString)//false

//distinto de
console.log(numero1 != numero2) //true
console.log(numero1 !=10)//false
console.log(numero1 !=numeroString)//true-igual que igualdad comun, solo compra el valor

//distinto estricto
console.log(numero1 !== numero2)//true
console.log(numero1 !=="10")//true porque es distinto en su tipo
console.log(numero1 !== 10)//false

//menor, mayor, igual que
console.log(numero1 >numero2)//false
console.log(numero1 < numero2)//true
console.log(numero1 >= numero2)//false
console.log(numero1 <= numero2)//true
console.log(numero1 <= numeroString)//true- no existen los estrictos, ven solo el contenido

//negacion- devuelve el valor contrario al que representa la variable, lo niega
let string= "Hola"
let stringEmpty= ""
let nulo = null
let indefinido= undefined
let verdadero= true
let positivo= 5
let negativo= -4
let noNumero= NaN
let neutro= 0


console.log(!string)//false
console.log(!stringEmpty)//true
console.log(!null)//true
console.log(!undefined)//true
console.log(!true)//false
console.log(!false)//true
console.log(!positivo)//false
console.log(!negativo)//false
console.log(!noNumero)//true
console.log(!neutro)//true


if(string===stringEmpty){
    console.log("me ejecute")//no se ejectua porque no es verdader
}

if(string === "Hola"){
    console.log("si")
}//hay que tener en ceunta las mayusculas y las minusculas
 
let nombre= prompt ("Ingrese su nombre.")//tmb se puede poner el toLowercase igual

if(nombre.toLowerCase() ==="pedro"){
    alert ("Hola, Pedro")
} else{
    alert ("No se quien sos")
}

let condition=("true")
let condition2=("false")
//se ejecuta la primera condicion que aparece, entonces a veces es mejor separa los if
//elseif- evalua mas de una condicion
if (condition) {
    console.log("es un if")
    //si se cumple la condicion1, se ejecuta
} else if(condition2){
    console.log("es un if else")
    //si se cumple la condicion2, se ejecuta
}else {
    console.log("es un else")
    //se ejecuta si ninguna se cumple
}

//scope
//sucede los mismo que con las funciones, no puede llamar variables por fuera del if
//con var si se puede
let condition= ("true")
let nombre= ("")//si no pongo esta variable, me tira error

if (condition){ 
    nombre= "Indra"
}
console.log(nombre)

let edad=17
let esElCumple= "true"

if (esElCumple){
    edad ++
}

if (edad >=18){
    alert ("Podes Manejar!")
}
//si no le defino un valor a la variable, es false porque es undefined
let nombre
if (nombre){
    console.log("me ejecuto?")
}*/
/*consigna 1:
crear un programa que clacule la suma de 2 numeros, valide el resultado y retorne, Verdadero si el resultado es positivo y retorne FALSO si el resultado en negativo*/

const suma=(a,b)=>{
    const resultado=(a+b)
    if(resultado >0 ){
        return true
    }else if(resultado ===0){
        return null
    }else {
        return false}}

/*crear un programa que reciba un numero e identifique si es par o impar*/
const parImpar= (a)=>{
    const modulo= (a %2)
    if (modulo===0){
        return true
    }else {
        return false
    }
}
/*crear un programa que reciba un nobre y si es Pedro QUE MUESTRE POR consola un msj de salude , y si no es pedro que diga, "no sos pedro*/

const saludarsiEsPedro= (nombre)=>{
let mensaje=""
if (nombre.toLowerCase()==="pedro"){
    mensaje= "Hola Pedro, cómo estas?"
} else {mensaje= "No sos Pedro"}
    return mensaje
}
//recursividad==> creas una funcion y adentro de la misma , la volves a ejecutar
/*crear un progtama que reciba una cntraseña y valide si su longitud es mayor a o igual a 8 caracteres, si es menor, solicitar que ingrese de nuevo la contraseña*/
const password= prompt ("Ingrese su contraseña")

const validarContraseña=(password)=>{
    if (password.length >=8){
        return true
    }else {
        password= prompt ("Ingrese su contraseña")
        validarContraseña(password)
    }
}
validarContraseña(password)
















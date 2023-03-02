//Crear una funcion que reciba como argumento un string y devuelva la cantidad de caracteres que tenga el mismo.
const saludo= (hi)=>{
    const saludoCompleto= (`${hi}!`)
    return (saludoCompleto.length)
}
console.log (saludo("Hola mundo"))

//omar la siguiente variable, convertirla a todo mayusculas y mostrar por consola. Hacer lo mismo pero con minusculas.
let string= ("El artista WOS cantando QUEREME")
console.log (string.toUpperCase())
console.log (string.toLowerCase())

//Tomar la variable del ejercicio 2 y cortar el string devolviendo solo "WOS" y hacer el mismo proceso pero devolver "QUEREME".
 console.log (string.slice(11,14))
 console.log (string.slice (24))

//Tomar la variable del ejercicio 2 y reemplazar "WOS" por "Queen" y "QUEREME" por "Bohemian Rhapsody"
//solo reeemplaza de a un parametro
// de esta manera, concatenando, se pueden reemplazar varios parametros a la vez
console.log(string.replace ("WOS", "QUEEN"). replace("QUEREME", "Bohemian Rhapsody"))
//otra forma de modificar los 2 a la vez
 console.log(string = string.replace("WOS", "QUEEN"))
 console.log(string.replace ("QUEREME", "bohemian Rahpsody"))
//Crear una funcion que tome por parametro un numero de DNI y retorne el mismo valor pero como un string
const dniToString=()=>{
    let dni= prompt("ingrese su dni")
    return dni.toString()
}
const dniString=(dni)=>{
    return dni.toString()
}
let dni= 33368841
console.log (dni.toString())

//rear una funcion que tome por parametro al menos 4 numeros y retorne el numero menor de ellos
//Realizar lo mismo pero con otra funcion que retorne el numero mayor
 
 console.log (Math.min (2,8,80,-3,-25))
 console.log (Math.max (2,8,80,-3,-25))

//Crear una funcion que tome por argumento un numero y retorne un numero aleatorio entre el 0 y el argumento.
let numberRandom =(Math.random()*8)
console.log (numberRandom)

//Tomar la siguiente variable y lograr las siguientes tareas:
//Redondear el numero hacia arriba
//Redondear el numero hacia abajo
let number1 = 12.49

console.log(Math.floor(number1))
console.log(Math.ceil(number1))



























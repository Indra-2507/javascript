let firstname= "Indra" //string- cadena de texto
let lastname= "Lima"
let birthDateYear=1988 //number- interger
let PI=3.141518 //number -float
let knowshowtodrive= true //boolean
let willDinner
let presentation= `Hola mi nombre es ${firstname} ${lastname} y nací en el año ${birthDateYear}`

console.log(firstname)
console.log(lastname)
console.log(birthDateYear)
console.log(firstname + " " + lastname)//para espaclogiar el contenido concatenando
console.log(firstname, lastname) //llego al msmo resultado pero no estoy concatenando
console.log("Hola, mi nombre es " + firstname + " " + lastname + "y naci en el año" + " " + birthDateYear)

//template literals - template strings
console.log(`Hola mi nombre es ${firstname} ${lastname} y nací en el año ${birthDateYear}`) //sugar syntax
console.log(presentation)
console.log(typeof PI)
console.log(typeof knowshowtodrive)
console.log(typeof willDinner) // typeof nos sirve para saber el tipo de dato que es una variable
console.log(typeof presentation)
firstname= "Azul"
console.log(firstname)
console.log("Hola, mi nombre es " + firstname + " " + lastname + " y naci en el año" + " " + birthDateYear)

/*operadores aritmeticos*/
 let number1 = "10"
 let number2= 5

 console.log("suma:", number1 + number2)//como el + concatena, piensa que estamos concatenando, por eso es muy importante ver el tipo de dtos que estamos poniendo.... los numeros van en number, no en string
 console.log ("resta:",number2 - number1)
console.log ("multiplcacion:",number1 * number2)
console.log("division:",number1 / number2)
console.log("modulo:",number1 % number2)

const placeOfBirth= "Carmen de Patagones"// es inmutable

/*alert("no podes ver este contenido")
const name= prompt("Ingrese su nombre")
const age= prompt( "Ingrese su edad", 0)
const birthDate= prompt ("Ingrese su nacimiento", "dd-mm-aaaa")
/*console.log (Usted ingreso su nombre: ${name})
console.log(Usted ingreso su edad: ${age})*/



const num1= prompt ("Ingrese el primer numero", 0)
const num2= prompt ("Ingrese el segund numero", 0)
/*parseint es una funcion nativa de javascriot que nos permite trasnformar de un string a un numero entero*/
console.log("la suma es:", parseInt (num1) + parseInt (num2))
console.log("la resta es:", num1 - num2)

//confirm
const acceptTerms = confirm ("acepatas los terminos y condiciones")

console.log(acceptTerms)







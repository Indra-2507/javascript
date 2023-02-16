//FUNCIONES
/*function welcome(){
    document.write("Hola desde mi funcion saludo <br>")}

welcome()
welcome()
welcome()*/

//arrow function

/*const welcome= () => {
    //sentencias de codigo
    document.write("Hola desde mi funcion saludo <br>")
}*/

//parametros de funciones

/*const showName= (name) => {
    console.log(name)
}

showName("Indra")//lo que esta dentro de los parentesis es el argumento
showName("pilar")
showName("fernanda")
showName()//al no dar parametro, se vuelve undefined


const sumar=(num1, num2)=>{
    const resultado = num1 + num2
    console.log(resultado)
}

sumar(5,10)
sumar(15, -10)
sumar(80,20)

const number1= parseInt(prompt("Ingrese el primer numero:", 0))
const number2= parseInt(prompt("Ingrese el segundo numero:", 0))

sumar(number1, number2)*/
 
//return=> me permite tener disponible el valor por fuera de la funcion
//Una vez que tengo un retorno abajo no puedo hacer mas nada
// no se retorna la variable per se, se retorna el valor de la variable, se puede poner siempre result, en cada funcion.
const resta= (a,b) => {
    const result= a - b
    return result
}

const sumar=(num1, num2)=>{
    const result = num1 + num2
    return result 
}
 //se puede ahorrar codigo, ya que no es necesario tener una constante que se llame resultado porque con return puede dirigirme directamente a num1 y num2.

const sumar2=(num1, num2)=>{
   return  num1 + num2
}

const miResta= resta(10,5)

//hacen lo mismo

console.log (sumar(10, resta(5, -11)))
console.log (sumar(10, miResta))

const number1= parseInt(prompt("Ingrese el primer numero:", 0))
const number2= parseInt(prompt("Ingrese el segundo numero:", 0))

document.write (`<h3> Este es el resultado: ${sumar(number1,number2)}</h3>`)
/*console.log(miResta)*/





















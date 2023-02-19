let nombre= "Hola Indra"
//length - devuelve el numero de caracteres de la variable
console.log (nombre.length)
//toUpercase- lleva a mayusculas el string... lleva parentesis porque es una funcion nativa
console.log(nombre.toUpperCase())
//tolowercase
console.log(nombre.toLowerCase())
//slice- corta el string en la cantidad de caracteres dados
//puede recibir 1 o 2 parametros... 
//rebibe la posicion desde donde va a mostrar el string hasta el final
const saludoCortado= nombre.slice(5)
console.log (saludoCortado)
const saludoCortado2= nombre.slice(0,4)
console.log (saludoCortado2)
//va a mostrar desde el 0 al 4- desde y hasta

//case sensitive- sensible a mayusculas y minusculas
// include- devolver un booleano
console.log(nombre.includes("Hola"))

//index of- devolver el numero del caracter que recibe como argumento
//cuando no encuentra un caracter , aparece -1
//si el cracter esta repetdo, devuelve el primero que encuentre
const caracter= nombre.indexOf("l")
console.log (caracter)

//replace- recibe como argumento lo que tiene que reemplazar y lo que va a ser reeemplazado
const reemplazarNombre= nombre.replace ("Indra", "Mica")
console.log (reemplazarNombre)
let numero=10
//toString-- toma un dato y lo transforma en string
//hace lo inverso del parseint
console.log(numero.toString())

//Number() trnaforma a numero un string con coma... no se ouede hacer con el parseint
let numerconComa="10.5"
console.log (Number(numerconComa))
//Boolean-detecta si un tipo de dato es truthy o falsy
const booleano= Boolean(undefined)
console.log(booleano)

//isNan- pregunta si NO es un numero-
//in Not a Number---true
console.log(isNaN(nombre))


//objeto Math- es un dato que ya viene con javascript y posee sus propios metodos y funciones
let float= 10.6
//round- redondea
console.log(Math.round(float))
//ceil- redondea para arriba siempre
console.log(Math.ceil(float))
//floor- redondea para abajo
console.log (Math.floor(float))
//random- devuelve un numero aleatorio entre 0 y 1
console.log(Math.random())
//se puede mutlplicar por un numero y devuelve un numero aleatorio entre 0 y ese numero
console.log(Math.random()*10)

//min y max- duvuelve el numero maximo o minimo entre una cantidad de numeros que le pasemos
console.log(Math.min (-12, 0, 5, 120,45))
console.log(Math.max (-12, 0, 5, 120,45))

//ejercicio practico: devolver un numero entero entre 0 y 5 sin coma, es decir redondeado
const numberRandom= (Math.round (Math.random()*5))
console.log (numberRandom)































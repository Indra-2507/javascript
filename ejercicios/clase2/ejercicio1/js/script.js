/*const ejercicio0 = (firstname) => {
    return firstname}

const firstname = prompt ("firstname")

console.log(`Hola! un gusto ${firstname}`)

const sumar= (a,b) =>{
    return a +b
    
}

const restar= (a,b) =>{
    return a -b
}

const dividir= (a,b) =>{
    return a / b
}

const multiplicar= (a,b) =>{
    return a * b
}

console.log (multiplicar(2,3))
const resultado= dividir(10,2)
console.log (sumar(2,1)+multiplicar(2,1))
console.log(resultado + sumar(7,9))*/

/*const aumentarSueldo =(sueldo, porcentaje) =>{
    const aumento= ((porcentaje * sueldo)/100)
return sueldo + aumento
}

console.log (aumentarSueldo (1000,10))

const precioIva=(precio)=>{
    return precio*(21/100)+precio
}

console.log (precioIva(100))

const datos=(firstname, age, profession, country)=> {
console.log (`Hola! mi nombre es: ${firstname}, tengo ${age}, soy ${profession} y vivo en ${country}.`)
}

datos (`Indra`,`34`,`estudiante`,`argentina`)*/

//contador
//va let porque necesito que cambie el valor
//let va fuera de la funcion porque si esta dentro de la funcion, se reinicia cada vez que lo ejecuto
let numero=0

const incrementar=(x)=>{
    numero= x + 1
    return numero
}

const incrementar1= (x)=>{
    numero++
    return numero
}
const calculoIva= (precio)=>{
const total=((precio*21)/100)
return total
}
const impuestoPais=(precio)=>{
    const total=((precio*35)/100)
    return total
}

const totalImpuestos =(precio)=>{
    const iva =calculoIva(precio)
    const porcentajeImpuestoPais= impuestoPais(precio)
    return iva + porcentajeImpuestoPais+ precio
}
















//ejercicio 1
const sumar =(a,b)=>{
    return (a + b)
}
console.log (sumar(2,3))
console.log (sumar(1.2,3.2))
sumar(8,-6)

const restar =(a,b)=>{
    return (a-b)
}
const dividir=(a,b)=>{
    return (a/b)
}

const multiplicar=(a,b)=>{
    return (a*b)
}
 //es par
 
const par=(numero)=>{
    if(numero%2 ===0){
        console.log (`true`)
    }else {console.log(`false`)}
}

//impar
const impar=(numero)=>{
    if(numero%2 !==0){
        console.log (`true`)}
        else{console.log(`false`)}
}
//triangulo
const areaTriangulo=(base, altura)=>{
    return((base*altura)/2)
}
console.log(areaTriangulo(8,8/2))

//gritar
const gritar=(saludo)=>{
    const saludar= (`¡ ${saludo}!`)
    return saludar
}

console.log(gritar(`hola`))
//nombre completo

const nombreCompleto=(firstname, lastname)=>{
    const nameComplete= (`Mi nombre es ${firstname} y mi apellido es ${lastname}`)
return nameComplete
}
console.log(nombreCompleto (`Indra`,`Lima`))

//saludar

const bienvenida=(nombreCompleto)=>{
const saludo= (`¡Hola ${nombreCompleto}, bienvenida!`)
return saludo
}
console.log (bienvenida(`Indra Lima`))

//saludar gritando MALLL
const saludarGritando=(firstname, lastname)=>{
    const b= bienvenida(firstname, lastname)
    const c=gritar
    return c, b
}
console.log (saludarGritando(`pepa pig`))

//datosciudad

const obtenerDatosCiudad=(nombre,poblacion, pais)=>{
    const city= nombre
    const many= poblacion
    const country= pais
    console.log(`La ciudad de ${city} tiene una población de ${many} habitantes y está ubicada en ${country}}`)
}

obtenerDatosCiudad(`ROSARIO`, `500000`, `ARGENTINA`)

//horas en segundos

const convertirHorasEnSegundos=(horas)=>{
const calculo= (horas * 3600)
return (`La cantidad de horas ingresadas, equivalen a ${calculo} segundos`)
}

//perimetro rectangulo

const calcularPerimetroRectangulo=(ancho, alto)=>{
    const calculo= 2*(ancho+alto)
    return calculo
}

//calcularPorcentaje dejar
const calcularPorcentaje=(a,b)=>{

}


//sumar porcentaje

const sumarPorcentaje=(number)=>{
    const total= calcularPorcentaje (number)
    return total +number
}
const sumarPorcentaje2=(number)=>{
    const total= calcularPorcentaje(number)
    return total+number
}

//restar porcentaje

const restarPorcentaje=()=>{
    
}

//FPS

const fps=(cuadros)=>{
    const total= (cuadros * 60)
    return total
}

//rivales
const obtenerCompetencia =(a, b)=>{
const first= a
const second= b
return (`${a} Vs. ${b}`)
}

console.log(obtenerCompetencia(`gatos`, `perros`))

//generar email

const generarEmail=(user, dominio)=>{
return (`${user}${dominio}`)
}
console.log (generarEmail(`indra`,`@hotmail.com`))

//mayor de edad

const esMayor=(edad)=>{
    if(edad>=18){
        console.log (`true`)}
        else{console.log(`false`)}
    }
//hacecalor
const haceCalor=(temperatura)=>{
    if(temperatura >=25){
        console.log (`true`)}
        else{console.log(`false`)}
}
//calcular puntaje
const calcularPuntaje=(a,b,c)=>{
    const nivel1= a*3
    const nivel2= b*5
    const nivel3= c*10
    return nivel1 + nivel2 + nivel3
    }

//aceptar deposito
const aceptarDeposito=(monto)=>{
if (monto %10 ==0){
    console.log (`true`)}
    else console.log(`false`)
}










//puedeVerPelicula(edad, tieneAutorizacion)
//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

//????
/* const puedeVerPelicula=(edad, tieneAutorizacion)=>{
    if (edad >=15 + tieneAutorizacion == true){
        return "puede ver"
    }else 
    return "no puede ver"
 }

 //estaEnRango(valor, minimo, maximo)
//Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango=(minimo,maximo,value)=>{
    if (value)

}*/
//esParOImpar(numero)
//Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

const parOimpar=(number)=>{
    if (number % 2 === 0){
        return "par"
    }else{ return "impar"
    }
}
//esPositivoONegativo(numero)
//Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

const positivoONegativo=(number)=>{
    if (number >0){
        return "positivo"
    }else if(number===0){
            return null
        }else {
        return"negativo"
    }
}
//Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

const avanzarSemaforo=(color)=>{
    if (color == "verde"){
        return "amarillo"
    }
    if (color == "amarillo"){
        return "rojo"
    }
    if (color == "rojo"){
        return "verde"
    }
}

//Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

const obtenerDiasMes=(mes)=>{
    if (mes === "enero"){
        return "31 dias"
    } 
    if (mes === "marzo"){
        return "31 dias"
    } 
    if (mes === "mayo"){
        return "31 dias"
    } 
    if (mes === "julio"){
        return "31 dias"
    } 
    if (mes === "agosto"){
        return "31 dias"
    } 
    if (mes === "octubre"){
        return "31 dias"
    } 
    if (mes === "diciembre"){
        return "31 dias"
    } 
    if (mes === "junio"){
        return "30 dias"
    } 
    if (mes === "abril"){
        return "30 dias"
    } 
    if (mes === "septiembre"){
        return "30 dias"
    } 
    if (mes === "noviembre"){
        return "30 dias"
    } 
    if (mes === "febrero"){
        return "28 o 29 dias"
    }
}
//Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

/*const añoNacimiento=(numero)=>{
if (numero <=1949)

}


































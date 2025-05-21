
let altura = parseFloat (prompt("digite la estatura"))

if(altura<= 150){
    alert("PERSONA DE ALTURA BAJA")

}else if(altura >= 151 && altura <= 170){
    alert("PERSONA DE ALTURA MEDIA")

}else if(altura >= 171){
    alert("PERSONA DE ALTURA ALTA")
}


let matematicas = parseFloat(prompt(" digite la nota de matematicas "))
let español = parseFloat(prompt(" digite la nota de español "))
let sociales = parseFloat(prompt(" digite la nota de sociales "))

let promedio = ((matematicas+español+sociales)/3)

if (promedio === 10){
    alert("EXCELENTE")
}
else if (promedio > 7 && promedio < 9){
    alert("BUENO")
}
else if ( promedio <= 7){
    alert("INSUFICIENTE")
} 


let estatura = parseInt(prompt("DIGITE SU ESTATURA"))
let velocidad = parseInt(prompt("DIGITE SU VELOCIDAD"))
let edad = parseInt(prompt("DIGITE SU EDAD"))

if(estatura >= 170 && velocidad >= 100 && edad >= 18){
    alert("PERTENE AL EQUIPO DE MAYORES")
}else if(estatura >= 170 && velocidad >= 100 && edad < 18){
    alert("PERTENE AL EQUIPO DE MENORES")
}else {
    alert("NO CUMPLE CON LOS REQUISITOS")
}


let preciounitario = parseInt(prompt("INTRODUCE EL PRECIO DE ALGUN ESCRITORIO :"));
let cantidad = parseInt(prompt("INTRODUCE LA CANTIDAD DE ESCRITORIOS QUE DESEA COMPRAR :"));
let totalapagar = 0
let descuento = 0

if(cantidad < 5){
    descuento = 0,10
    totalapagar = preciounitario - (preciounitario * descuento)
    document.writeln("EL TOTAL A PAGAR ES DE ", totalapagar , "EL DESCUENTO FUE 10%")
}
else if(cantidad >= $ && cantidad < 10){
    descuento = 0.28
    totalapagar = preciounitario - (preciounitario * descuento)
    document.writeln("EL TOTAL A PAGAR ES DE ", totalapagar , "EL DESCUENTO ES DE 20%")

}
else if(cantidad >= 10){
    descuento = 0.40
    totalapagar = preciounitario - (preciounitario * descuento)
    document.writeln("EL TOTAL A PAGAR ES DE ", totalapagar , "EL DESCUENTO ES DE 40%")
    
}
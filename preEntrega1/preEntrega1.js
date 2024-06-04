// CALCULAR VALOR FINAL DE UN PRODUCTO SELECCIONADO EN FUNCIÓN DE IMPUESTOS Y DESCUENTOS

/* 2do */
let iva = 0.18;

function impuestos( valorProducto,iva ){

    let impuestos = valorProducto * iva;
    return impuestos;
}

/* 3ro */
function dsctoSocio( socio,valorProducto ){

    let dscto = 0;
    if( socio == "SI" ){
        dscto = valorProducto * 0.20;
        return dscto;
    }

}

/* 4to */
function datosValorProducto( valorProducto,impuestos,socio ){
    
    let valorFinal = valorProducto + impuestos(valorProducto,iva);
    let dscto = dsctoSocio( socio,valorProducto );

    console.log("<----- Valor del producto ----->");
    console.log("Valor del producto: ", valorProducto);    
    console.log("Es socio: ", socio);
    console.log("Descuento socio: ", dscto);
    console.log("Impuestos: ", 0.18);
    console.log("Valor final + impuestos: ", valorFinal);    
    console.log("Valor final + impuestos - descuento: ", valorFinal - dscto);

}
/* 1ero */
console.log("Bienvenido/a a nuestra tienda");

let valorProducto = "";

while( valorProducto != "FIN"){

    valorProducto = prompt("Ingresa el valor del producto seleccionado o FIN para finalizar");

    if( valorProducto != "FIN" ){

        valorProducto = parseInt(valorProducto);                    
        let socio = prompt("¿Es socio?: SI | NO");
        datosValorProducto(valorProducto,impuestos,socio);
     
    }     
       
}

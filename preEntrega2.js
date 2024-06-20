/* ARREGLOS */
console.log("Bienvenidos/as a nuestra tienda");

class Socio {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    getDatos() {
        console.log("<----- DATOS DE LOS SOCIOS/AS ----->");
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("DNI: ", this.dni);
    }
}

let listaSocios = [
    {nombre: "Matias", apellido: "Ponce", dni: "41651762"},
    {nombre: "Nicolas", apellido: "Ponce", dni: "12345678"},
    {nombre: "Santiago", apellido: "Zapata", dni: "23456789"},
    {nombre: "Seomara", apellido: "Funes", dni: "34567891"},
    {nombre: "Madeleine", apellido: "Velazques", dni: "45678912"}
];

let productos = [
    {nombre: "Cocina", precio: 50000},
    {nombre: "Mouse", precio: 14000},
    {nombre: "Teclado", precio: 20000},
    {nombre: "Micrófono", precio: 8000},
    {nombre: "Escritorio", precio: 100000},
    {nombre: "Silla", precio: 35000},
    {nombre: "Lampara", precio: 5000}
];

// 3. Descuento por socio

let iva = 0.18;

function esSocio(nombre, apellido, dni) {
    for (let socio of listaSocios) {
        if (socio.nombre === nombre && socio.apellido === apellido && socio.dni === dni) {
            return socio; // Retornar el objeto socio
        }
    }
    return null; // Retornar null si no es socio
}

function impuestos(precio, iva) {
    return precio * iva;
}

function dsctoSocio(socio, precio) {
    let dscto = 0;
    if (socio) { // Verificar si socio es válido
        dscto = precio * 0.20;
    }
    return dscto;
}


// 4. Lista final de consumo
function datosValorProducto(precio, iva, socio) {
    
    let valorImpuestos = impuestos(precio, iva);
    let dscto = dsctoSocio(socio, precio);

    console.log("<----- Valor del producto ----->");
    console.log("Valor del producto: ", precio);
    console.log("Documento: ", socio ? socio.dni : "No socio");
    console.log("Descuento socio: ", dscto);
    console.log("Impuestos: ", valorImpuestos);

    let valorFinal = precio + valorImpuestos;

    console.log("Valor final + impuestos: ", valorFinal);
    console.log("Valor final + impuestos - descuento: ", valorFinal - dscto);
}

// 1. Reconocer al usuario como socio o no
let nombre = prompt("Ingrese su nombre:"); // "Matias";
let apellido = prompt("Ingrese su apellido:"); // "Ponce";
let dni = prompt("Ingrese su DNI:"); // "41651762";

let socio = esSocio(nombre, apellido, dni);
if (socio) {
    console.log(`Bienvenido nuevamente: ${nombre}`);
} else {
    console.log(`Hola, bienvenido a nuestra tienda ${nombre}`);
}

// 2. Selección del producto
console.log("Seleccione un producto de la lista:");
productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
});

let seleccion = parseInt(prompt("Ingrese el número del producto seleccionado")); // 1;
if (seleccion >= 1 && seleccion <= productos.length) {
    let productoSeleccionado = productos[seleccion - 1];
    console.log("Producto seleccionado:", productoSeleccionado); // Verificar que el producto sea correcto
    if (productoSeleccionado && productoSeleccionado.precio) {
        datosValorProducto(productoSeleccionado.precio, iva, socio);
    } else {
        console.log("Error: Producto seleccionado no válido.");
    }
} else {
    console.log("Selección inválida. Por favor, recargue la página e intente nuevamente.");
}
 

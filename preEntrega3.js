const container = document.querySelector(".container")
const btnregistro = document.getElementById("insBtn");
const btniniciar = document.getElementById("iniBtn");

btnregistro.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode")    
})
btniniciar.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode")
    container.classList.add("sing-in-mode")    
})

/* lÓGICA */

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
    {nombre: "Matias", apellido: "Ponce", contraseña:"argentina"},
    {nombre: "Nicolas", apellido: "Ponce", contraseña:"peru"},
    {nombre: "Santiago", apellido: "Zapata", contraseña:"colombia"},
    {nombre: "Seomara", apellido: "Funes", contraseña:"venezuela"},
    {nombre: "Madeleine", apellido: "Velazques", contraseña:"brasil"}
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

// 1. Reconocer al usuario como socio o no

function validar(){

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let password = document.getElementById("contraseña").value;

    let socioEncontrado = listaSocios.find(socio => 
        socio.nombre === nombreUsuario.split(' ')[0] && 
        socio.apellido === nombreUsuario.split(' ')[1] && 
        socio.contraseña === password
    );

    if (socioEncontrado) {
        // Usuario válido, redirigir a la página de productos
        window.location.href = "./pages/productos.html";
    } else {
        // Mostrar mensaje de error
        msj.innerHTML = `<h2>ERROR DE USUARIO</h2>
                         <p>El usuario ${nombreUsuario} no existe o la contraseña es incorrecta</p>`;
    }

    // Prevenir el comportamiento por defecto del formulario
    return false;

}
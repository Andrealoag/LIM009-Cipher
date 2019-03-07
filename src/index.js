/*capturar mensaje
*/
const offset = document.getElementById("txtOffset");
const mensaje = document.getElementById("mensaje1");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const mensajeMostrado = document.getElementById("mensajeMostrado");



function cifrar(){
    let textdeentrada = mensaje.value.toUpperCase();
    let coddespla = parseInt(offset.value);
    let nuevoMensaje = cipher.encode(coddespla,textdeentrada);
  mensajeMostrado.value = nuevoMensaje;
}
boton1.addEventListener("click",cifrar);

function descifrar(){
    let textdeentrada = mensaje.value.toUpperCase();
    let coddespla = parseInt(offset.value);
    let nuevoMensaje = cipher.decode(coddespla,textdeentrada);
  mensajeMostrado.value = nuevoMensaje;
}
boton2.addEventListener("click",descifrar);
    
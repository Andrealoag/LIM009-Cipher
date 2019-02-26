/*capturar mensaje
*/
const mensaje = document.getElementById("mensaje");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const mensajeMostrado = document.getElementById("mensajeMostrado");

boton1.addEventListener("click",()=>{
const mensajecapturado = mensaje.value;
console.log(mensajecapturado);
mensajeMostrado.innerHTML = mensajecapturado;
})

boton2.addEventListener("click",()=>{
    const mensajecapturado = mensaje.value;
    console.log(mensajecapturado);
    mensajeMostrado.innerHTML = mensajecapturado;
})
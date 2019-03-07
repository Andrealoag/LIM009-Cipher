window.cipher = {
  encode: (offset,string) => {
    
    let nuevoMensaje = '';
    for(let x = 0; x < string.length; x++){
      let lettercipher= String.fromCharCode((string.charCodeAt(x)-65+offset)%26+65);
      nuevoMensaje += lettercipher;
    }
    return nuevoMensaje;
  },

   decode: (offset,string) => {
    let nuevoMensaje = '';
    for(let x = 0; x < string.length; x++){
      let lettercipher= String.fromCharCode((string.charCodeAt(x)-90-offset)%26+90);
      nuevoMensaje += lettercipher;
    }
    return nuevoMensaje;
  },
}
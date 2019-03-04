window.cipher = {
    encode: (offset,string) => {
  
      let nuevoMensaje = '';
      for(let i = 0; i < string.length; i++){
        if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90) {
          let numberAscci = ((string[i].charCodeAt())-65+offset)%26+65;
          let lettercipher = String.fromCharCode(numberAscci);
          nuevoMensaje = nuevoMensaje + lettercipher;
        } else {
          
      nuevoMensaje = nuevoMensaje+string[i];
        }
      }
        return nuevoMensaje;
      },
  
    decode: (offset,string) => {
      let nuevoMensaje = '';
      for(let i = 0; i < string.length; i++){
        if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90) {
          let numberAscci = ((string[i].charCodeAt())-90-offset)%26+90;
          let lettercipher = String.fromCharCode(numberAscci);
          nuevoMensaje = nuevoMensaje + lettercipher;
        } else {
        nuevoMensaje = nuevoMensaje+string[i];
        }
      }
        return nuevoMensaje;
      },
  }
  
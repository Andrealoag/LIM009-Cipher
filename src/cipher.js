window.cipher = {
  encode: (offset,string) => {
    let nuevoMensaje = '';
    for(let x = 0; x < string.length; x++){
      //mayúsculas//
      if(string[x].charCodeAt()>=65 && string[x].charCodeAt()<=90){
      let lettercipher= String.fromCharCode((string[x].charCodeAt()-65+offset)%26+65);
      nuevoMensaje += lettercipher;
      //minúsculas//
      } else if(string[x].charCodeAt()>=97 && string[x].charCodeAt()<=122){
        let lettercipher= String.fromCharCode((string[x].charCodeAt()-97+offset)%26+97);
      nuevoMensaje += lettercipher;
      //números//
      } else if (string[x].charCodeAt()>=48 && string[x].charCodeAt()<=57){
        let lettercipher= String.fromCharCode((string[x].charCodeAt()-48+offset)%10+48);
      nuevoMensaje += lettercipher;
      //ñ y Ñ//
      } else if (string[x].charCodeAt()>=209 && string[x].charCodeAt()<=242){
        let lettercipher= String.fromCharCode((string[x].charCodeAt()-209+offset)%34+209);
      nuevoMensaje += lettercipher;
      }else{
      nuevoMensaje +=string[x];
      } 
    } 
   return nuevoMensaje;
  },

   decode: (offset,string) => {
    let nuevoMensaje = '';
    for(let x = 0; x < string.length; x++){
       //mayúsculas//
      if(string[x].charCodeAt()>=65 && string[x].charCodeAt()<=90){
      let lettercipher= String.fromCharCode((string.charCodeAt(x)-90-offset)%26+90);
      nuevoMensaje += lettercipher;
     //minúsculas//
      } else if(string[x].charCodeAt()>=97 && string[x].charCodeAt()<=122){
        let lettercipher= String.fromCharCode((string[x].charCodeAt()-122-offset)%26+122);
      nuevoMensaje += lettercipher;
      //números//
      } else if (string[x].charCodeAt()>=48 && string[x].charCodeAt()<=57){
        let lettercipher= String.fromCharCode((string[x].charCodeAt()-57-offset)%10+57);
      nuevoMensaje += lettercipher;
      //ñ y Ñ//
      } else if (string[x].charCodeAt()>=209 && string[x].charCodeAt()<=242){
        let lettercipher= String.fromCharCode((string[x].charCodeAt()-242-offset)%34+242);
        nuevoMensaje += lettercipher;
      }else{
      nuevoMensaje +=string[x];
      }
   }
     return nuevoMensaje;
  },
};

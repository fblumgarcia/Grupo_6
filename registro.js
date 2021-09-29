let registros = [];
let registros2 = [];

function agregarRegistro(){
    //codigo
    let registro={
       "usuario":document.getElementById("in_usuario").value,
       "contrasena":document.getElementById("in_contrasena").value
    };
    registros.push(registro);
    console.log(registros);
    //filtrarPorContrasena(registros, 5);
}

function filtrarPorContrasena(registros, filtro){
     //codigo
     
     registros2 = []
     for (let i = 1, registro; registro = registros[i]; i++) {
         if (registros[i].length <= filtro){
            registros2.push(registros[i-1], registros[i])
            i++;
         }else{
            i++;
         }
      }
      console.log(registros2);
      return registros2;
    }


module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
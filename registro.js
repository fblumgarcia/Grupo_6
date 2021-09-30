let registros = [];
let registros2 = [];

function agregarRegistro(){
    //codigo
    let registro={
       "usuario":document.getElementById("in_usuario").value,//Se define usuario y contraseña y se ingresa valor
       "contrasena":document.getElementById("in_contrasena").value
    };
    registros.push(registro);//Se agrega al array registros
    console.log(registros);
    //filtrarPorContrasena(registros, 5);
}

function filtrarPorContrasena(registros, filtro){
     //codigo
     
     registros2 = registros.filter(registro=>registro.contrasena.length<=filtro)//Se filtra por longitud de contraseña y se agrega al array registros2
      console.log(registros2);//Para imprimir
      return registros2;//Y el retorno que piden
    }


module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
var expresiones = /^[a-zA-Z0-9\_\-]{4,9}$/;
var expresiones1 = /^[a-zA-Z0-9\_\-]{5,30}$/;

function validar_nombreUsuario(usuario){
    if(!expresiones.test(usuario) ||  usuario === ""){
        return false;
    }else{
        return true;
    }
}
function validar_contrasena(contra){
    if(!expresiones1.test(contra) || contra === ""){
        return false;
    }else{
        return true;
    }
}
module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;




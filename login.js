let registros = [];

function validar_captcha(rcaptcha){
    if(rcaptcha==5){//Valida que la respuesta captcha sea 5
        login_captcha=true;
    }else{//si no lo pone como false
        login_captcha=false;
    }
}

function iniciar_sesion(usuario,contrasena,rcaptcha){
    validar_captcha(rcaptcha);//Llama la función validar_captcha
    if(login_captcha==true){//si cumple
        if(registros.find(registro=>registro.usuario===usuario)!=undefined){//Busca en el arreglo el usuario
            if(registros.find(registro=>registro.contrasena===contrasena)!=undefined){//Si esta busca la contraseña sea correcta
                return true;
            }else{//Si no es contraseña
                return false;
            }
        }else{//Si no esta el usuario
            return false;
        }
    }else{// Si el captcha esta mal
        return false;
    }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
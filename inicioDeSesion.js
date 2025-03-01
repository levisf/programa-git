          function validarCampos(){
    const usuario= document.getElementById ('user').value;
    const contraseña= document.getElementById('passpord').value;
    
if (usuario.trim()== "") {
    alert("ingrese usuario");
    return false;
    
}
if ( contraseña. trim()== "") {
    alert("ingrese contraseña");
    return false
    
}
alert  ("iniciar sesion");
return true;
}

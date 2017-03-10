window.addEventListener('load',function() {
  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function() {
    //Obteniendo los nodos del HTML
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var warnings = document.getElementsByClassName('warning');
    //Validación: No valores vacíos
    warnings[0].innerHTML = emailInput.value == ""? "El campo de usuario no puede estar en blanco":"";
    warnings[1].innerHTML = passwordInput.value == ""? "El campo de contraseña no puede estar en blanco":"";
    //Validación: Formato correcto de email
    if (/([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/.test(emailInput.value) == false && passwordInput.value != "") {
      warnings[0].innerHTML = "Ingresar un usuario válido";
    }
    if (/([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/.test(emailInput.value) == true && passwordInput.value != "") {
      if(validateUser(emailInput.value, passwordInput.value)){
        alert("Hola usuario");
      }else {
        alert("Error en el usuario o contraseña");
      }
    }
    //"El campo de usuario no puede estar en blanco"
    //"Debe ingresar un email válido"
    //"El campo de contraseña no puede estar en blanco"
  });
});

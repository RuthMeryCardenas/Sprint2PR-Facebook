//VARIABLES GLOBALES
  var users = [];
//FUNCIONES DEL USUARIO
  function User(name, lastName, nickName, email, password){
    this.name = name,
    this.lastName = lastName,
    this.nickName = nickName,
    this.email = email,
    this.password = password;
    this.login = function (passwordAux) {
      return this.password == passwordAux? true : false;
    }
  }
  //Creación de usuarios
  users.push(new User("Mercedes", "Zubieta", "Meche", "meche.zubieta@gmail.com", "meche"));
  users.push(new User("Arabela", "Rojas", "Ara", "ara.rojas@gmail.com", "ara"));
  users.push(new User("Maria Paula", "Rivarola", "Papu", "papu.rivarola@gmail.com", "papu"));
  users.push(new User("Gian Carlo", "Corzo", "Gian", "gian.corzo@gmail.com", "gian"));
  users.push(new User("Michelle", "Seguil", "mich", "mich.seguil@gmail.com", "mich"));
  function validateUser(emailUser, passwordUser){
    for (var user in users) {
      if (users[user].email == emailUser) {
        if(users[user].login(passwordUser)){
          return true;
        }
      }
    }
    return false;
  }

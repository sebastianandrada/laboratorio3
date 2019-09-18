function mostrar() {
    var usr = document.getElementById("usr").value
    var pass = document.getElementById("pass").value
    if (usr === "asd" && pass === "1234") {
      alert('todo esta ok')
    } else {
      alert('usuario y/o password incorrectos')
    }
  }
const url = 'http://localhost:3000'
window.addEventListener('load', iniciar)

function iniciar() {

}

function onSignIn() {
  let correo = document.getElementById('email').value
  let contraseña = document.getElementById('pass').value 
  
  login(correo, contraseña)
}

function login(correo, contraseña) {
  var http = new XMLHttpRequest()
  http.open('POST', url+'/loginUsuario')
  http.setRequestHeader("Content-Type", "application/json")
  http.onreadystatechange = function() {
    if(http.readyState === 4 && http.status === 200) {
    
      console.log('respuesta', http.responseText)
      if(http.responseText === 'true') {
        window.location.replace('./index.html')
      }
    }
  }
  var datosLogin = {'usr': correo, 'pass': contraseña}
  http.send(JSON.stringify(datosLogin))
}
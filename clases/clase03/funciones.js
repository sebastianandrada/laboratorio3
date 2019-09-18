let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let tabla = document.getElementById('tabla')

function guardar() {
  verificarVacio()
  /*let nuevoRow = `<tr>
    <td>${nombre}</td>
    <td>Smith</td>
  <td>50</td>
  </tr>`
    tabla.appendChild*/
}

function verificarVacio() {
  let nombre = document.getElementById('nombre')
  let apellido = document.getElementById('apellido')
  if (nombre.value == "" || apellido.value == "") {
    nombre.className += "error"
    apellido.className += "error"
    alert("Debe ingresar un nombre y un apellido")
    return
  }
}

function borrar(e) {
  //alert("se borro")
  e.preventDefault()
  console.log(e.target.parentNode)
  console.log(e.target.parentNode.parentNode)
  e.target.parentNode.parentNode.innerHTML = "";
}

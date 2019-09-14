let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let tabla = document.getElementById('tabla')

function guardar() {
  let nombre = document.getElementById('nombre')
  let apellido = document.getElementById('apellido')
  let tabla = document.getElementById('tabla')
  let form = document.getElementById('agregar')
  verificarVacio()
  let nuevoRow = `<tr>
    <td>${nombre.value}</td>
    <td>${apellido.value}</td>
    <td>
    <a href="" onclick="borrar(event)">borrar</a>
    <a href="" onclick="editar(event)">editar</a>
  </td>
  </tr>`
    tabla.innerHTML += nuevoRow
    form.hidden = true
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
  e.target.parentNode.parentNode.innerHTML = ""
}

function editar(e) {
  abrir()
  e.preventDefault()
  borrar(e)
  //tds = e.target.parentNode.parentNode.children

}

function cerrar() {
  let form = document.getElementById('agregar')
  form.hidden = true
}

function abrir() {
  let form = document.getElementById('agregar')
  form.hidden = false
}

function abrirModificar() {
  let form = document.getElementById('agregar')
  let botonModif = document.getElementById('modificar')
  form.hidden = false
  botonModif.hidden = false
}

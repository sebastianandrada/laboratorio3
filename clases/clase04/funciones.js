let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let tabla = document.getElementById('tabla')

function guardar() {
  let nombre = document.getElementById('nombre')
  let apellido = document.getElementById('apellido')
  let tablaRef = document.getElementById('tabla').getElementsByTagName('tbody')[0]
  let form = document.getElementById('agregar')
  verificarVacio()
  let nuevoContenidoRow = `<tr>
    <td>${nombre.value}</td>
    <td>${apellido.value}</td>
    <td>
    <a href="" onclick="borrar(event)">borrar</a>
    <a href="" onclick="editar(event)">editar</a>
  </td>
  </tr>`
  form.hidden = true
  let newRow = tablaRef.insertRow()
  newRow.innerHTML = nuevoContenidoRow
  nombre.value = ''
  apellido.value= ''
}

function verificarVacio() {
  let nombre = document.getElementById('nombre')
  let apellido = document.getElementById('apellido')
  if (nombre.value == '' || apellido.value == '') {
    nombre.className += 'error'
    apellido.className += 'error'
    alert('Debe ingresar un nombre y un apellido')
    return
  }
}

function borrar(e) {
  e.preventDefault()
  e.target.parentNode.parentNode.innerHTML = ''
}

function editar(e) {
  abrirModificar()
  e.preventDefault()
  borrar(e)
  tds = e.target.parentNode.parentNode.children
}

function cerrar() {
  let nombre = document.getElementById('nombre')
  let apellido = document.getElementById('apellido')
  let form = document.getElementById('agregar')
  nombre.value = ''
  apellido.value = ''
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

const url = 'http://localhost:3000'
window.addEventListener('load', cargarTable)

function cargarTable() {
  var form = document.getElementById('agregar')
  var xml = new XMLHttpRequest()
  xml.open('GET', url+'/personas')
  xml.onreadystatechange = function() {
    if(xml.readyState === 4 && xml.status === 200) {
      var personas = JSON.parse(xml.responseText)
      for(let i=0; i<personas.length;i++) {
        var p = personas[i]
        addRow(p.nombre, p.apellido, p.telefono, p.fecha)
      }
    }
  }
  xml.send()
}

function agregar() {
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  let fecha = document.getElementById('fecha').value
  let telefono = document.getElementById('telefono').value
  verificarVacio()
  addRow(nombre, apellido, telefono, fecha)
  guardar(nombre, apellido, telefono, fecha)
  cerrarForm()
  limpiarForm()
}

function guardar(nombre, apellido, telefono, fecha){
  var xml = new XMLHttpRequest()
  xml.open('POST', url+'/nuevaPersona')
  xml.setRequestHeader("Content-Type", "application/json")
  xml.onreadystatechange = function() {
    if(xml.readyState === 4 && xml.status === 200) {
      console.log('respuesta ', xml.responseText)
    }
  }
  var persona = {'nombre' : nombre, 'apellido' : apellido, 'telefono' : telefono, 'fecha' : fecha}
  xml.send(JSON.stringify(persona))
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
  limpiarForm()
  cerrarForm()
}

function abrirModificar() {
  let form = document.getElementById('agregar')
  let botonModif = document.getElementById('modificar')
  form.hidden = false
  botonModif.hidden = false
}

function addRow(nombre, apellido, tel, fecha) {
  let tablaRef = document.getElementById('tabla').getElementsByTagName('tbody')[0]
  let nuevoContenidoRow = `<tr>
  <td>${nombre}</td>
  <td>${apellido}</td>
  <td>${tel}</td>
  <td>${fecha}</td>
  <td>
  <a href="" onclick="borrar(event)">borrar</a>
</td>
</tr>`
  let newRow = tablaRef.insertRow()
  newRow.innerHTML = nuevoContenidoRow
}

function limpiarForm() {
  nombre.value = ''
  apellido.value= ''
  telefono.value = ''
  fecha.value = ''
}

function cerrarForm() {
  form.hidden = true
}

function abrirForm() {
  form.hidden = false
}

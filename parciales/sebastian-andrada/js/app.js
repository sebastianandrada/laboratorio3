window.addEventListener('load', iniciar)

function iniciar() {
  var loading = document.getElementById('loading')
  var http = new XMLHttpRequest()
  loading.hidden = false
  http.open('GET', 'http://localhost:3000/materias')
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      var materias = JSON.parse(http.responseText)
      for (let index = 0; index < materias.length; index++) {
        const m = materias[index];
        addRowMateria(m)
        loading.hidden = true
      }
      loading.hidden = true
    }
  }
  http.send()
}

function addRowMateria(materia) {
  var tablaRef = document.getElementById('tabla').getElementsByTagName('tbody')[0]

  var newRow = tablaRef.insertRow()
  var newCellId = newRow.insertCell(0)
  var textId = document.createTextNode(materia.id)
  newCellId.appendChild(textId)
  newCellId.hidden = true

  var newCellNombre = newRow.insertCell(1)
  var textNombre = document.createTextNode(materia.nombre)
  newCellNombre.appendChild(textNombre)

  var newCellCuatrimestre = newRow.insertCell(2)
  var textCuatrimestre = document.createTextNode(materia.cuatrimestre)
  newCellCuatrimestre.appendChild(textCuatrimestre)

  var newCellFecha = newRow.insertCell(3)
  var textFecha = document.createTextNode(materia.fechaFinal)
  newCellFecha.appendChild(textFecha)

  var newCellTurno = newRow.insertCell(4)
  var textTurno = document.createTextNode(materia.turno)
  newCellTurno.appendChild(textTurno)
  newRow.id = materia.id

  newRow.addEventListener('click', function (e) {
    mostrarFormMateria(e)
  })
}

function mostrarFormMateria(event) {
  mostrarForm()

  document.getElementById('id').value = event.target.parentNode.children[0].innerText
  document.getElementById('nombre').value = event.target.parentNode.children[1].innerText
  document.getElementById('cuatrimestre').value = event.target.parentNode.children[2].innerText
  var fechaStrig = event.target.parentNode.children[3].innerText
  var parts = fechaStrig.split("/");
  var dt = new Date(parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10)).toLocaleDateString();
  document.getElementById('fecha').value = dt
  //console.log(document.getElementById(event.target.parentNode.children[4].innerText))
  var turnoRadio = document.getElementById(event.target.parentNode.children[4].innerText)
  turnoRadio.checked = true

}

function modificar() {
  var nombre = document.getElementById('nombre').value
  var cuatrimestre = document.getElementById('cuatrimestre').value
  var fecha = document.getElementById('fecha').value
  var id = parseInt(document.getElementById('id').value)
  var turno = document.querySelector('input[name="turno"]:checked').value;
  
  
  var loading = document.getElementById('loading')

  if (ingresoValido(nombre, fecha, turno)) {
    loading.hidden = false
    var http = new XMLHttpRequest()
    http.open('POST', 'http://localhost:3000/editar')
    http.setRequestHeader('Content-type', 'application/json')
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        var respuesta = JSON.parse(http.responseText)
        if(respuesta.type === 'ok') {
          document.getElementById(id).children[1].innerText = nombre
          document.getElementById(id).children[3].innerText = fecha
          document.getElementById(id).children[4].innerText = turno
        }
        console.log(JSON.parse(http.responseText))
        //actualizarCard(JSON.parse(http.responseText))
        console.log(http.responseText);
        
        loading.hidden = true
        cerrarForm()
      }
    }
    var materia = { 'id': id, 'nombre': nombre, 'cuatrimestre': cuatrimestre, 'fechaFinal': fecha, 'turno': turno }
    http.send(JSON.stringify(materia))
  } else {
    document.getElementById('nombre').classList.add('error')
    document.getElementById('fecha').classList.add('error')
  }
}

function ingresoValido(nombre, fecha, turno) {
  return nombre.length > 6 && turno != null && turno != undefined
}

function eliminar() {
  var id = parseInt(document.getElementById('id').value)
  var loading = document.getElementById('loading')
  loading.hidden = false

  var http = new XMLHttpRequest()
  http.open('POST', 'http://localhost:3000/eliminar')
  http.setRequestHeader('Content-type', 'application/json')
  http.onreadystatechange = function () {
    if(http.readyState === 4 && http.status === 200) {
      console.log(http.responseText)
      var el = document.getElementById(id)
      el.remove()
      loading.hidden = true
      cerrarForm()
    }
  }
  var request = {'id' : id}
  http.send(JSON.stringify(request))
}

function mostrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = false
}

function cerrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = true
}
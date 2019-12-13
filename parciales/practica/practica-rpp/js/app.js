$(document).ready(function () {
  crearTabla()
})

function crearTabla() {
  $.get('http://localhost:3000/personas', function (data, status) {
    for (let index = 0; index < data.length; index++) {
      const p = data[index];
      addRowPersona(p)
    }
  })
}

function addRowPersona(persona) {
  var tablaRef = document.getElementById('tabla').getElementsByTagName('tbody')[0]

  var newRow = tablaRef.insertRow()
  var newCellNombre = newRow.insertCell(0)
  var textNombre = document.createTextNode(persona.nombre)
  newCellNombre.appendChild(textNombre)

  var newCellApellido = newRow.insertCell(1)
  var textApellido = document.createTextNode(persona.apellido)
  newCellApellido.appendChild(textApellido)

  var newCellLocalidad = newRow.insertCell(2)
  var textLocalidad = document.createTextNode(persona.localidad.nombre)
  newCellLocalidad.appendChild(textLocalidad)

  var newCellSexo = newRow.insertCell(3)
  var textSexo = document.createTextNode(persona.sexo)
  newCellSexo.appendChild(textSexo)

  var newCellId = newRow.insertCell(4)
  var textId = document.createTextNode(persona.id)
  newCellId.appendChild(textId)
  newCellId.hidden = true

  newRow.addEventListener('click', function (e) {
    mostrarPersona(e)
  })
}

function mostrarPersona(event) {
  console.log(event.target.parentNode.children[0].innerText)
  console.log(event.target.parentNode.children[1].innerText)
  console.log(event.target.parentNode.children[2].innerText)
  console.log(event.target.parentNode.children[3].innerText)
  console.log(event.target.parentNode.children[4].innerText)
  console.log(event.target.parentNode.children[4].outerText)
  $('#nombre').val(event.target.parentNode.children[0].innerText)
  $('#apellido').val(event.target.parentNode.children[1].innerText)
  $('#localidad').val(event.target.parentNode.children[2].innerText)
  $('#sexo').val(event.target.parentNode.children[3].innerText)

  mostrarForm()
  var id = event.target.parentNode.children[4].outerText
  $('#idPersona').val(id)

  llenarProvicias()
  $('#provicia').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    llenarLocalidades(valueSelected)
  });

  $('#selectLocalidad').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    $('#selectLocalidad')
      .find('option')
      .remove()
      .end()
  });
}

function llenarProvicias() {
  $.get('http://localhost:3000/provincias', function (data, status) {
    for (let index = 0; index < data.length; index++) {
      const prov = data[index];
      $('#provicia').append('<option value=' + prov.id + '>' + prov.nombre + '</option>');
    }
  })
}

function llenarLocalidades(valueSelected) {
  $.get('http://localhost:3000/localidades', { idProv: valueSelected }, function (data, status) {
    for (let index = 0; index < data.length; index++) {
      const loc = data[index];
      $('#selectLocalidad').append('<option value=' + loc.id + '>' + loc.nombre + '</option>');
    }
  })
}

function mostrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = false
}

function cerrarForm() {
  let form = document.getElementById('form-editar')
  form.hidden = true
}

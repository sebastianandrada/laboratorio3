$(document).ready(function () {
  crarTabla()
})

function crarTabla() {
  $.get('http://localhost:3000/personas', function (data, status) {
    llenarTabla(data)
  })
}

function llenarTabla(personas) {
  for (var i = 0; i < personas.length; i++) {
    var p = personas[i]
    addRowPersona(p)
  }
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
  newCellId.classList.add('idRow')
  newCellId.hidden = true

  // newRow.click( function(e) {
  //   mostrarPersona(e)
  // })
  newRow.addEventListener('click', function (e) {
    mostrarPersona(e)
  })

}

function modificar() {
  var inputNombre = $('#nombre').val()
  var inputApellido = $('#apellido').val()
  var selectedLocalidadId = $("#selectLocalidad option:selected").val();
  var selectedLocalidadText = $( "#selectLocalidad option:selected" ).text();
  var selectedSexo = $('input[name=gender]:checked').val();
  var personaId = $('#idPersona').val()
  
  $.post('http://localhost:3000/editar', 
  {
    id : personaId,
    nombre : inputNombre,
    apellido : inputApellido,
    sexo : selectedSexo,
    localidad : { id : selectedLocalidadId, nombre : selectedLocalidadText }
  }, 
  function (data, status) {
    console.log(data)
  }
  )
}

function mostrarPersona(persona) {
  mostrarForm()
  var id = persona.target.parentNode.children[4].outerText
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
  $.get('http://localhost:3000/localidades', {idProv : valueSelected} , function (data, status) {
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

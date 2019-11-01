$(document).ready( function() {
  iniciar()
})

function iniciar() {
   $.get('http://localhost:3000/personas', function(data, status) {
    mostrarPersonas(data)
   })
}

function mostrarPersonas(personas) {
  for(var i=0; i < personas.length; i++) {
    var p = personas[i]
    addPersona(p)
  }
}

function addPersona(persona) {
  var container = $('#personas')
  var card = $('<div class="card">')
  var image = $('<img src="./img/user.png">')
  var seccionDatos = $('<section class="card-datos">')
  var id = $('<label>').html(persona.id)
  id.hidden = true
  var nombre = $('<label>')
  nombre.html(persona.nombre)
  var apellido = $('<label>')
  apellido.html(persona.apellido)
  var sexo = $('<label>')
  sexo.html(persona.sexo)
  card.append(image)
  card.append(seccionDatos)
  seccionDatos.append(nombre)
  seccionDatos.append(apellido)
  seccionDatos.append(sexo)
  seccionDatos.append(id)
  /*card.addEventiListener('click', funciton() {
    mostrarDatos(p)
  })*/
  card.click( function (p) {
    mostrarDatos(p)
  })
  container.append(card)
}

function mostrarDatos(event) {
  mostrarForm()
  console.log(event.target.children[1].children[1].innerHTML)
}

function mostrarForm() {
  $("#form-editar").hidden = false
}
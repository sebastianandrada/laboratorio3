window.addEventListener('load', iniciar)

function iniciar() {
  var loading = document.getElementById('loading')
  var http = new XMLHttpRequest()
  loading.hidden = false
  http.open('GET', 'http://localhost:3000/personas')
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      var personas = JSON.parse(http.responseText)
      mostrarPersonas(personas)
      loading.hidden = true
    }
  }
  http.send()
}

function mostrarPersonas(personas) {
  for (let index = 0; index < personas.length; index++) {
    const persona = personas[index]
    crearCard(persona)
  }
}

function crearCard(persona) {
  var container = document.getElementById('personas')
  var card = document.createElement('div')
  card.classList.add('card')
  card.id = persona.id
  var image = document.createElement('img')
  image.src = './img/user.png'
  var sectionDatos = document.createElement('section')
  sectionDatos.classList.add('card-datos')
  var id = document.createElement('label')
  id.innerText = persona.id
  id.hidden = true
  var nombre = document.createElement('label')
  nombre.innerText = persona.nombre
  var apellido = document.createElement('label')
  apellido.innerText = persona.apellido
  var sexo = document.createElement('label')
  sexo.innerText = persona.sexo
  card.appendChild(image)
  card.appendChild(sectionDatos)
  sectionDatos.appendChild(nombre)
  sectionDatos.appendChild(apellido)
  sectionDatos.appendChild(sexo)
  sectionDatos.appendChild(id)

  card.addEventListener('click', function (p) {
    mostrarDatos(p)
  })

  container.appendChild(card)
}

function mostrarDatos(event) {
  mostrarForm()
  console.log(event.target.children[1].children[0].innerText)
  console.log(event.target.children[1].children[1].innerText)
  console.log(event.target.children[1].children[2].innerText)
  console.log(event.target.children[1].children[3].innerText)

  document.getElementById('nombre').value =
    event.target.children[1].children[0].innerText
  document.getElementById('apellido').value =
    event.target.children[1].children[1].innerText
  document.getElementById('sexo').value =
    event.target.children[1].children[2].innerText
  document.getElementById('id').value =
    event.target.children[1].children[3].innerText
}

function modificar() {
  var nombre = document.getElementById('nombre').value
  var apellido = document.getElementById('apellido').value
  var sexo = document.getElementById('sexo').value
  var id = parseInt(document.getElementById('id').value)
  var loading = document.getElementById('loading')

  if (ingresoValido(nombre, apellido, sexo)) {
    loading.hidden = false
    var http = new XMLHttpRequest()
    http.open('POST', 'http://localhost:3000/editar')
    http.setRequestHeader('Content-type', 'application/json')
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        console.log(JSON.parse(http.responseText))
        actualizarCard(JSON.parse(http.responseText))
        loading.hidden = true
        cerrarForm()
      }
    }
    var persona = { 'id': id, 'nombre': nombre, 'apellido': apellido, 'sexo': sexo }
    http.send(JSON.stringify(persona))
  } else {
    alert('Datos invalidos')
  }

}

function actualizarCard(persona) {
  document.getElementById(persona.id).children[1].children[0].innerHTML = persona.nombre
  document.getElementById(persona.id).children[1].children[1].innerHTML = persona.apellido
  document.getElementById(persona.id).children[1].children[2].innerHTML = persona.sexo
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
      borrarCard(id)
      loading.hidden = true
      cerrarForm()
    }
  }
  var request = {'id' : id}
  http.send(JSON.stringify(request))
}

function borrarCard(id) {
  var el = document.getElementById(id)
  el.remove()
}

function mostrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = false
}

function cerrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = true
}
  
function ingresoValido(nombre, apellido, sexo) {
  return nombre.length > 3 && apellido.length > 3 && sexo != null && sexo != undefined
}

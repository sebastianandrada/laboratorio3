window.addEventListener('load', iniciar)

function iniciar() {
  var http = new XMLHttpRequest()
  http.open('GET', 'http://localhost:3000/personas')
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      var personas = JSON.parse(http.responseText)
      mostrarPersonas(personas)
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

  card.addEventListener('click', function(p) {
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

  var http = new XMLHttpRequest()
  http.open('POST', 'http://localhost:3000/editar')
  http.setRequestHeader('Content-type', 'application/json')
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.readyState === 200) {
      console.log(this.responseText)
    }
  }
  var persona = {'id' : id, 'nombre' : nombre, 'apellido' : apellido, 'sexo' : sexo}  
  http.send(JSON.stringify(persona))
}

function mostrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = false
}

function cerrarForm() {
  var form = document.getElementById('form-editar')
  form.hidden = true
}

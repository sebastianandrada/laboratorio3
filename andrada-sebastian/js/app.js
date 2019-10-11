const url = "http://localhost:3000";
window.addEventListener("load", iniciar);

function iniciar() {
  var http = new XMLHttpRequest();
  http.open("GET", url + "/personas");
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      var personas = JSON.parse(http.responseText);
      mostrarPersonas(personas);
    }
  };
  http.send()
}

function mostrarPersonas(personas) {
  for (let i = 0; i < personas.length; i++) {
    var p = personas[i];
    addPersona(p);
  }
}

function mostrarDatos(event) {
  mostrarForm()
  console.log(event.target.children[1].children[1].textContent)
}

function addPersona(persona) {
  let container = document.getElementById('personas')
  let card = document.createElement('div')
  card.classList.add('card')
  let image = document.createElement('img')
  image.src = "./img/user.png"
  let sectionDatos = document.createElement('section')
  sectionDatos.classList.add('card-datos')
  let id = document.createElement('label')
  id.innerText = persona.id
  id.hidden = true
  let nombre = document.createElement('label')
  nombre.innerText = persona.nombre
  let apellido = document.createElement('label')
  apellido.innerText = persona.apellido
  let sexo = document.createElement('label')
  sexo.innerHTML = persona.sexo
  card.appendChild(image)
  card.appendChild(sectionDatos)
  sectionDatos.appendChild(nombre)
  sectionDatos.appendChild(apellido)
  sectionDatos.appendChild(sexo)
  sectionDatos.appendChild(id)

  card.addEventListener("click", function(p) {
    mostrarDatos(p)
  })

  container.appendChild(card)

}

function eliminar() {

}

function modificar() {
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  var e = document.getElementById("sexo");
  var sex = e.options[e.selectedIndex].value;
  console.log(nombre, apellido, sex)
  if(validarForm()) {
    confirmaModificar(nombre, apellido, sex)
  }

}

function confirmaModificar(nombre, apellido, sexo) {
  var http = new XMLHttpRequest();
  http.open("POST", url + "/editar");
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      console.log(http.responseText)
      //modificarPersona(personas);
    }
  };
  var persona = {'nombre': nombre, 'apellido': apellido, 'sexo': sexo}
  http.send(JSON.stringify(persona))
}

function validarForm() {
  return true;
}

function mostrarForm() {
  let form = document.getElementById('form-editar')
  form.hidden = false
}

function cerrarForm() {
  let form = document.getElementById('form-editar')
  form.hidden = true
}


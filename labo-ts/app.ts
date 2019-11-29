namespace entidades {
  let lista: Array<Persona> = new Array<Persona>()
  export function modificar(e) {

  }

  /*
  function tomaDatos() {
    let per;
    let id: number = Number($("#idInput").val());
    let nom: string = String($("#nomInput").val());
    let ape: string = String($("#apeInput").val());
    let edad: number = Number($("#edadInput").val());
    if ($("#tipoInput").val() == "Profesor") {
      per = new Profesor(id, nom, ape, edad);
    } else {
      per = new Alumno(id, nom, ape, edad);
    }

    return per
  }

  function creaTr(per) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let ntd1 = document.createTextNode(per.name);
    let ntd = document.createTextNode(String(per.id));
    let td2 = document.createElement("td");
    let ntd2 = document.createTextNode(per.lastname);
    let td3 = document.createElement("td");
    let ntd3 = document.createTextNode(String(per.age));
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let btnMod = document.createElement("input");
    let btnBor = document.createElement("input");
    btnMod.setAttribute("type", "button");
    btnMod.setAttribute("value", "Modificar");
    btnMod.setAttribute("class", "btn btn-outline-warning");
    btnMod.setAttribute("id", "btnMod");
    btnMod.addEventListener("click", modificar);
    btnBor.setAttribute("type", "button");
    btnBor.setAttribute("value", "Borrar");
    btnBor.setAttribute("class", "btn btn-outline-danger");
    btnBor.setAttribute("id", "btnBor");
    btnBor.addEventListener("click", eliminar);
    let str = "";

    if (per instanceof Profesor) {
      str = "Profesor";
    } else {
      str = "Alumno";
    }

    let ntd4 = document.createTextNode(str);
    td5.setAttribute("value", "TD 5");
    td.appendChild(ntd);
    td1.appendChild(ntd1);
    td2.appendChild(ntd2);
    td3.appendChild(ntd3);
    td4.appendChild(ntd4);
    td5.appendChild(btnMod);
    td6.appendChild(btnBor);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    return tr;
  }
  export function limpiar() {
    $("#idInput").val("");
    $("#nomInput").val("");
    $("#apeInput").val("");
    $("#edadInput").val("");
  }

  export function agregar() {

    let per = tomaDatos();
    let tr = creaTr(per);

    $("tbody").append(tr);
    lista.push(per);
  }*/
}

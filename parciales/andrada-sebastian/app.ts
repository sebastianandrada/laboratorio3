/// <reference path="node_modules/@types/jquery/dist/jquery.slim.d.ts" />
namespace entidades {

  //   $(document).ready(function(){
  //     cargarTabla()
  // });
  var listaVehiculos: Array<Vehiculo> = new Array<Vehiculo>()

  export function agregar(): void {
    let id: number = this.calcularId()
    let marca: string = $('#marca').val() as string;
    let modelo: string = $('#modelo').val() as string;
    let precio: number = parseFloat($('#precio').val() as string);
    let cantPuertas: number = parseInt($('#cantPuertas').val() as string);
    let es4x4: boolean = $('#es4x4')[0].innerHTML === 'true';
    if (id != null && marca != null && modelo != null && precio != null && cantPuertas != null && es4x4 != null) {
      let vehiculo
      if (es4x4) {
        vehiculo = new Camioneta(id, marca, modelo, precio, es4x4)
      } else {
        vehiculo = new Auto(id, marca, modelo, precio, cantPuertas)
      }
      listaVehiculos.push(vehiculo)
      console.log(listaVehiculos)
    }

  }

  export function calcularId(): number {
    let ultimo = listaVehiculos.reduce(function (max: number, item) {
      if (item.id > max) {
        return item.id
      } else {
        return max
      }
    }, 0)
    return ultimo + 1
  }


  export function cargarTabla(): void {
    var tablaRef = document.getElementById('tabla').getElementsByTagName('tbody')[0]
    listaVehiculos.forEach(function (e) {
      let nuevoRow = `<tr>
      <th>${e.id}</th>
      <td>${e.marca}</td>
      <td>${e.modelo}</td>
      <td>${e.precio}</td>
    </tr>`
      let newRow = tablaRef.insertRow()
      newRow.innerHTML = nuevoRow
    })
  }


  export function calcular() {
    return listaVehiculos.reduce(function (sumaPrecios, item) {
      return sumaPrecios += item.precio
    }, 0) / listaVehiculos.length
  }

  export function filtrado(key:string) {
    return listaVehiculos.filter( function (item) {
      return item.marca.includes(key)
    })
  }
  /*
      generarSelect(): void {
  
      }*/

}
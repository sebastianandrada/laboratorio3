/// <reference path="node_modules/@types/jquery/dist/jquery.slim.d.ts" />
var entidades;
(function (entidades) {
    //   $(document).ready(function(){
    //     cargarTabla()
    // });
    var listaVehiculos = new Array();
    function agregar() {
        var id = this.calcularId();
        var marca = $('#marca').val();
        var modelo = $('#modelo').val();
        var precio = parseFloat($('#precio').val());
        var cantPuertas = parseInt($('#cantPuertas').val());
        var es4x4 = $('#es4x4')[0].innerHTML === 'true';
        if (id != null && marca != null && modelo != null && precio != null && cantPuertas != null && es4x4 != null) {
            var vehiculo = void 0;
            if (es4x4) {
                vehiculo = new entidades.Camioneta(id, marca, modelo, precio, es4x4);
            }
            else {
                vehiculo = new entidades.Auto(id, marca, modelo, precio, cantPuertas);
            }
            listaVehiculos.push(vehiculo);
            console.log(listaVehiculos);
        }
    }
    entidades.agregar = agregar;
    function calcularId() {
        var ultimo = listaVehiculos.reduce(function (max, item) {
            if (item.id > max) {
                return item.id;
            }
            else {
                return max;
            }
        }, 0);
        return ultimo + 1;
    }
    entidades.calcularId = calcularId;
    function cargarTabla() {
        var tablaRef = document.getElementById('tabla').getElementsByTagName('tbody')[0];
        listaVehiculos.forEach(function (e) {
            var nuevoRow = "<tr>\n      <th>" + e.id + "</th>\n      <td>" + e.marca + "</td>\n      <td>" + e.modelo + "</td>\n      <td>" + e.precio + "</td>\n    </tr>";
            var newRow = tablaRef.insertRow();
            newRow.innerHTML = nuevoRow;
        });
    }
    entidades.cargarTabla = cargarTabla;
    function calcular() {
        return listaVehiculos.reduce(function (sumaPrecios, item) {
            return sumaPrecios += item.precio;
        }, 0) / listaVehiculos.length;
    }
    entidades.calcular = calcular;
    function filtrado(key) {
        return listaVehiculos.filter(function (item) {
            return item.marca.includes(key);
        });
    }
    entidades.filtrado = filtrado;
    /*
        generarSelect(): void {
    
        }*/
})(entidades || (entidades = {}));

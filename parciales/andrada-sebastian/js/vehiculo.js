var entidades;
(function (entidades) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(id, marca, modelo, precio) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        return Vehiculo;
    }());
    entidades.Vehiculo = Vehiculo;
})(entidades || (entidades = {}));

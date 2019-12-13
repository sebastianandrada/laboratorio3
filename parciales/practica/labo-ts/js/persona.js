var entidades;
(function (entidades) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        return Persona;
    }());
    entidades.Persona = Persona;
})(entidades || (entidades = {}));
/***
 * $ tsc *.ts --outDir ./js
 */ 

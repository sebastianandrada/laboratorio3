var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var entidades;
(function (entidades) {
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(id, marca, modelo, precio, cuatroXCuatro) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.cuatroXCuatro = cuatroXCuatro;
            return _this;
        }
        return Camioneta;
    }(entidades.Vehiculo));
    entidades.Camioneta = Camioneta;
})(entidades || (entidades = {}));

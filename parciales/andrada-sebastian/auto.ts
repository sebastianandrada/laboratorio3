namespace entidades {
  export class Auto extends Vehiculo {
    cantidadDePuertas: number

    constructor(id: number, marca: string, modelo: string, precio: number, cantidadPuertas: number) {
      super(id, marca, modelo, precio)
      this.cantidadDePuertas = cantidadPuertas
    }
  }
}
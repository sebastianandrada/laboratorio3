namespace entidades {
  export class Profesor extends Persona {
    cuil: string

    constructor(nombre: string, apellido: string, edad: number, cuil: string) {
      super(nombre, apellido, edad)
      this.cuil = apellido
    }
  }
}

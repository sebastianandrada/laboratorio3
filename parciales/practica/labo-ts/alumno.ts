namespace entidades {
  export class Alumno extends Persona {
    legajo: number

    constructor(nombre: string, apellido: string, edad: number, legajo: number) {
      super(nombre, apellido, edad)
      this.legajo = legajo
    }
  }
}

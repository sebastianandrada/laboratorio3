// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe = false;

// Tuplas
var parejaHeroes: [string, string] = [batman,superman];
var villano: [string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados: string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza {
  Up = 1,
  Down,
  Left,
  Right,
}

var fuerzaFlash: Fuerza  = 5;
var fuerzaSuperman: Fuerza = 100;
var fuerzaBatman: Fuerza = 1;
var fuerzaAcuaman: Fuerza = 0;

// Retorno de funciones
function activar_batiseñal():string {
  return "activada";
}

function pedir_ayuda(): void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder:string = "100";
var largoDelPoder:number = poder.length;
console.log( largoDelPoder );

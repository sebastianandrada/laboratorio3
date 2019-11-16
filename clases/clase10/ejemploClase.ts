namespace animales {
    export function makeSounds():void {
        var miPerro:Animal = new Dog('toby')
        var miGato:Animal = new Cat('gato')
    
        var lista: Array<Animal> = new Array<Animal>()
        lista.push(miPerro)
        lista.push(miGato)
    
        lista.forEach(function (item) {
            item.makeSound()
        })
    }
    


}


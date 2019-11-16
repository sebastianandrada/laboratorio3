namespace animales {
    var miPerro = new Dog('toby')
    var miGato = new Cat('gato')

    var lista: Array<Animal> = new Array<Animal>()
    lista.push(miPerro)
    lista.push(miGato)

    lista.forEach(function (item) {
        item.makeSound()
    })

    miPerro.makeSound()

}


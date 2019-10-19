$('document').ready(function() {
  //console.log($('parrafo')) //busca el tag que tenga ese id
  // console.log($('#parrafo')) 
  // console.log($('.btn')) // retorna un array con elementos que tienen la clase especificada
  //console.log($('#parrafo').html()) // devuelve lo que esta en el inner Html
  console.log($('#parrafo').html('algo')) // setea en el text node el texto recibido como parametro 
  $('#btn').click(saludar)
  $('.btn-saludar').click(saludar)

  // console.log($('#txt').val())
  // $('#txt').val('Nuevo valor')

  $('#txt').attr('id', 'perro') // -> al atributo id, le pone el atributo perro

  /**Ajax w3school */
  $('button').click( function() {
    $.get('http://localhost:3000/personas'), 
    function(data, status) {
      for(var i=0;i<length;i++) {
        console.log(data[i])
      }
    }
  })

  $('button').click(function() {
  $.post('url',
  {
    nombre : "donald duck",
    apellido : "Dugbior",
    id : 12
  }, 
  function(data, status) {
    alert(data + status)
  })
  })
})

//$('divCard').dblclick(mostrar)

function saludar() {
  alert('hola')
}


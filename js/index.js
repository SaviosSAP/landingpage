var $input = $('.form-fieldset > input');

$input.blur(function (e) {
  $(this).toggleClass('filled', !!$(this).val());
});

$("#registrar").click(function() {
  
  var nombre = $("#username").val();
  var email =  $("#email").val();
  var empresa = $("#empresa").val();
  var ocupacion = $("#ocupacion").val();
  var telefono = $("#telefono").val();
  
  if ($("#username").val("") || $("#email").val("") || 
  $("#empresa").val("") || $("#ocupacion").val("") || $("#telefono").val("")){
  alert( "Por favor diligenciar todos los campos" );
  
  $('#form1').attr('onsubmit','return false;');


    $("#username").val(nombre);
    $("#email").val(email);
    $("#empresa").val(empresa);
    $("#ocupacion").val(ocupacion);
    $("#telefono").val(telefono);
  });

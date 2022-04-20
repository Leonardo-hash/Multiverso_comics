 $('#form_login').click (function(){ // pegando do formulário e criando a função ao clicar
     var email= $('#txtEmail').val();
     var senha= $('#txtsenha').val();
     var erro=  $('#erro').val();

     if(email== ""){
         $('#alerta').removeClass("d-none")
           //alert("insira seu nome!")
           $('#erro').html('e-mail')
         return false;
     } else{
        $('#alerta').addClass("d-none")
       
        return false;
     }})
    

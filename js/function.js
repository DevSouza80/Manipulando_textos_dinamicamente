$(function() {
   var el = $('.box');

    //el.html('<div class="teste">Meu elemento!</div>')

  // el.html('<h1 class="text1">Meu texto via javascript!</h1>');

  // $('.box2').text("<div></div>");
   //$('.box2').text($('.box2').text() + "Ola mundo!");

   //console.log($('.box2').text());

 //  $('input[type=text').val("Olá mundo!");
 //  $('textarea').text("Olá mundo");


 //$('input[type=button]').click(function(){
   //var v = $('input[type=text]').val();
    //Split separa nossa string com base no delimitador.
   // var v2 = v.split("@");
  //  console.log(v2);
   // console.log(v)

   $('input[type=button').click(function() {
    var str = $('input[type=text]').val();

    //console.log(str.substr(0,4));

   //var splitstr = str.split("@");

  //  if(splitstr[1] == 'hotmail.com') {
    //    $('input[type=text]').css('opacity','0');
  //  } else {
  //      console.log("A condição não bateu!");
 //   }

     console.log(str.trim());
 })

});
//scroll nav color

$( document ).ready(function() {
  $(window).on('scroll', function(){
  	if($(window).scrollTop()){
  		$('nav').addClass('white');
      $('nav').addClass('blue');
  	}
  	else
  	{
  		$('nav').removeClass('white');
      $('nav').removeClass('blue');
  	}
  })
// MENU RESPONSIVE TO X

  $('.icon').click(function(){
      $('nav .menu').toggleClass('on');
  })
  $('.icon').click(function(){
    $('.icon').toggleClass('active');
  })
  $('nav .menu a').click(function(){
      $('nav .menu').toggleClass('on');
  })
  $('nav .menu a').click(function(){
    $('.icon').toggleClass('active');
  })
  $('.icon').click(function(){
    $('nav').toggleClass('wht');
  })
  $('nav .menu a').click(function(){
    $('nav').toggleClass('wht');
  })
});

// MAINTEXT TYPING
var str = '¡Hola! Soy Sebastián Lorca, Diseñador Gráfico';

// MAINTEXT
var typing = ' ';
var i = 0;
(function type() {
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#type').text(typing+'_');
  }else{
    $('#type').text(typing);
    return false;
  }
  var ran = Math.floor(Math.random() * 90) + 20;//this gives a random delay between each character so it feels more realistic
  //set ran to a fixed number if you want consistent speed.
  setTimeout(function(){
    type();
  }, ran)
  i++;
}());

// SCROLLTOID#
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});  

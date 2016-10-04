$("#text").hide()
$("#texttext").hide()
$("#text").fadeIn(3000).fadeOut(2000, function(){
  console.log('text faded out')
    $("#texttext").fadeIn(2000);
});


$('.nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -50
    }, 500);
    return false;
});
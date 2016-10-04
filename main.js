$("#text").hide()
$("#texttext").hide()
$("#text").fadeIn(3000).fadeOut(2000, function(){
  console.log('text faded out')
    $("#texttext").fadeIn(2000);
});

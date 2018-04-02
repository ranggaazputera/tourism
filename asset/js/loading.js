$(window).on("load", function (e) {
  setTimeout(function(){
    $('#loading').fadeOut();
  },1000);
  setTimeout(function(){
    $('#loading').remove();
  },2000);

});

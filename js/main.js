$('#Hamburger').click(function(){
  $('.hedaer-media-right').animate({
    right:0
  },500);
  $('html').css('overflow','hidden');
});
  $("#CLOSE").click(function () {
    $(".hedaer-media-right").animate(
      {
        right:"-100rem",
      },
      500
    );
  });
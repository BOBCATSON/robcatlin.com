$(function(){
  //fixes bug that stops togglable nav from toggling back up at xs size
  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });

  //scroll to top favicon fade-in
  $(window).scroll(function(){
    $('#scroll-up-div i').fadeIn(1600)
  })

  $('#scroll-up-div').on('click', function(){
    $(window).scrollTop(0);
    $('#scroll-up-div i').fadeOut(1600).hide();
  });



}); //end of jquery function

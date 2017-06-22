$(function(){
  //fixes bug that stops togglable nav from toggling back up at xs size
  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });

  //scroll to top favicon fade-in
  $(window).scroll(function(){
    $('#scroll-up-div i').show(1500);
  })

});

jQuery(function($) {
  $(".menuTrigger").on("click", function(e) {
    /*e.preventDefault();*/
    $(this).toggleClass("closeBtn");
    $(".navigation").toggleClass("isOpen");
  });

  // Close drawer when clicking outside of it
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".menuTrigger, .globalNav").length) {
      $(".menuTrigger").removeClass(".closeBtn");
      $(".navigation").removeClass(".isOpen");
    }
  });
});

$(function(){
  $('.menuTrigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});
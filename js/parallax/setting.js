$(document).ready(function(){
  // Parallax Option
  $('.parallax').each(function(){
    var get_bg = $(this).data('background');
    var get_speed = $(this).data('speed');
      $(this).css('background-image','url('+ get_bg +')');
      $(this).parallax("50%", get_speed);
  }); 
	  return false;  
});
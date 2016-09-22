$(function() {
  $('#ChangeToggle').click(function() {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');  
  });

  $('.ss_button').on('click',function() {
    $('.ss_content').slideUp('fast');
    $(this).next('.ss_content').slideDown('fast');
  });
	
	$(".fancybox").fancybox();


	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});


});
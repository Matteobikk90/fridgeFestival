$(function() {
  $('#ChangeToggle').click(function() {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');  
  });
		$(".fancybox").fancybox();


	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

});
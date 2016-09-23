$(document).ready(function() {

$('#ChangeToggle').click(function() {

 $('#navbar-hamburger').toggleClass('hidden');
 $('#navbar-close').toggleClass('hidden');  

});


$('.ss_button').click(function() {

if ($(this).next('.ss_content').is(':hidden')) {
// $('.ss_content').slideUp('fast');
$(this).next('.ss_content').slideDown('fast');
}
else if ($('.ss_content').is(':visible')) {
$(this).next('.ss_content').slideUp('fast');
}
});
  
	
$(".fancybox").fancybox();

$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
});


});
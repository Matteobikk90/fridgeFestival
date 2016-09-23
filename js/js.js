$(document).ready(function() {

$('#ChangeToggle').click(function() {

 $('#navbar-hamburger').toggleClass('hidden');
 $('#navbar-close').toggleClass('hidden');  

});


$('.ss_button').on('click', function() {

    if ($(this).next('.ss_content').is(":visible")) {
 $('.ss_content').slideUp('fast');
    } else {
 $(this).next('.ss_content').slideDown('fast');
    
   }
});
  
	
$(".fancybox").fancybox();

$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
});


});
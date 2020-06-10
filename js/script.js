$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header-nav,.header-title'). toggleClass('active');
		$('body').toggleClass('lock');
	});
});
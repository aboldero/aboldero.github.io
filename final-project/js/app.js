/* Animated Nav */

$(window).scroll(function () {
	if ($(window).width() > 890) {
		var offset = $(window).scrollTop();
		if (offset > 50) {
			$('header').addClass('header-offset');
			$('h1').hide();
		}
		else {
			$('header').removeClass('header-offset');
			$('h1').show();
		}
	} else {
		$('header').removeClass('header-offset');
		$('h1').show();
	}
})

/* Plus-Burger Nav */

$('#plus').click(function () {
	$('#mobile-nav').slideToggle();
});

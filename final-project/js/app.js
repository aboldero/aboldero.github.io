/* Animated Nav */

$(window).scroll(function () {
	if ($(window).width() > 890) {
		var offset = $(window).scrollTop();
		if (offset > 50) {
			$('header').addClass('header-offset');
			$('h1').hide();
			$('main').css("margin-top", "125px");
		}
		else {
			$('header').removeClass('header-offset');
			$('h1').show();
			$('main').css("margin-top", "250px");
		}
	} else {
		$('header').removeClass('header-offset');
		$('h1').show();
		$('main').css("margin-top", "50px");
	}
})

/* Plus-Burger Nav */

$('#plus').click(function () {
	$('#mobile-nav').slideToggle();
});

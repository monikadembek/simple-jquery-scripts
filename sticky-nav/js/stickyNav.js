//sticky nav script written by Monika Dembek

$(function() {
	var $nav = $('.mainNav');  //navigation element
	var $window = $(window);

	var navPos = $nav.offset().top;  // distance from top of the page for nav element
	console.log('nav top offset: ' + navPos + 'px');

	//while scrolling nav sticks to the top of the page by adding class .stickyNav at certain height
	$window.on('scroll', function() {
		if ($window.scrollTop() > navPos) {
			$nav.addClass('stickyNav');
		} else {
			$nav.removeClass('stickyNav');
		}
	});
});

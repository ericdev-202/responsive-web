$(document).ready(function() {
	$nav = $('.nav');
	$toggleCollapse = $('.togglecollapse');

	$toggleCollapse.click(function() {
		$nav.toggleClass('collapse');
	})
})
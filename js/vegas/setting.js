(function($) {
	'use strict';
	$.vegas('slideshow', {
		delay:8000,
		backgrounds:[
		{ src:'img/slider/img1.jpg', fade:4000 },
		{ src:'img/slider/img2.jpg', fade:4000 },
		{ src:'img/slider/img3.jpg', fade:4000 }
		]
	});
})(jQuery);

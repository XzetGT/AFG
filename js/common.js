$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".toggle-mnu").on('click', function(){
			$(this).toggleClass("on");
			$(".main-menu").slideToggle();
	});

	$(".section-4").waypoint(function() {

			$(".section-4 .card").each(function(index) {
				var ths = $(this);
				setInterval(function() {
					ths.removeClass("card-off");
				}, 150*index);
			});

	});

	$('.owl-carousel').owlCarousel({
		nav: true,
		items: 1,
		loop: 3,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
	});

	

	$(".section-5").waypoint(function() {

			$(".section-5 .tc-item").each(function(index) {
				var ths = $(this);
				setTimeout(function() {
					var myAnimation = new DrawFillSVG({
						 elementId: "tc-svg-" + index
					});
				}, 500*index);
			});

	});

	// var myAnimation = new DrawFillSVG({
	// 	elementId: "tc-svg-1"
	// });


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

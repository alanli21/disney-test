//hero slider
$('.hero-slider-fade').slick({
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay: true,
	autoplaySpeed: 2500,
	arrows: false,
	dots: true,
	customPaging: function (slider, i) {
		return '<span><img src="images/dot.png" /><img src="images/dot-active.png" /></span>';
	},


});

//video slider
$('.video-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	speed: 300,
	variableWidth: true,
	arrows: false,
	dots: false


});
//image slider
$('.image-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
	arrows: true,
	variableWidth: true

});


//placeholder text change
function changePlaceholder() {
	document.getElementById("placeholder_text").placeholder = "Entering name...";
}

function changePlaceholderBack() {
    document.getElementById("placeholder_text").placeholder = "Name*";
  }
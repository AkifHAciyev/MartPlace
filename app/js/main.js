$(function () {


	$(".rate-star").rateYo({
		rating: 4.4,
		starWidth: "17px",
		readOnly: true,
	});

	$('.slider__slider-inner').slick({
		variableWidth: true,
	});

	$('.slider__slider').css('display', 'flex');


	$('input[type="file"], select').styler();

	var mixer = mixitup('.newest-products__inner-box');

	const burger = document.querySelector('.newest-products__burger');



	$('.followers__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$('.feedback__items').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1
	});


});
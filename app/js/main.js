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

	var mixer = mixitup('.newest-products__inner-box');

	const burger = document.querySelector('.newest-products__burger');

});
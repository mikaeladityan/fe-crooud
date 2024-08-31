$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 5,
	center: true,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		},
		768: {
			items: 2,
		},
		1000: {
			items: 4,
		},
	},
});

const buttonOpen = document.getElementById("button-open");
const buttonClose = document.querySelector("#button-close");
const menu = document.querySelector("menu");

buttonOpen.addEventListener("click", () => {
	menu.classList.add("show");
});

buttonClose.addEventListener("click", () => {
	menu.classList.remove("show");
});

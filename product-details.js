const buttons = document.querySelectorAll("[data-carousel-btn]");
const nextBtn = document.querySelector('[data-carousel-button="next"]');
const slideContainer = document.querySelector("[data-carousel] [data-slides]");
let initialX = null;

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
		const slides = btn.closest("[data-carousel]").querySelector("[data-slides");

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;

		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});

setInterval(() => {
	nextBtn.click();
}, 5000);

slideContainer.addEventListener("touchstart", (e) => {
	initialX = e.touches[0].clientX;
});

slideContainer.addEventListener("touchend", (e) => {
	const finalX = e.changedTouches[0].clientX;
	const deltaX = finalX - initialX;

	let prevBtn, nextBtn;

	prevBtn = document.querySelector('[data-carousel-button="prev"]');
	nextBtn = document.querySelector('[data-carousel-button="next"]');

	if (deltaX > 0) {
		// console.log(prevBtn.click());
		prevBtn.click();
	} else if (deltaX < 0) {
		// console.log(nextBtn.click);
		nextBtn.click();
	}
});

// AMOUNT FUNTIONALITY

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const amount = document.querySelector("#num");
// console.log(plus);
// console.log(amount);

// const plusHandleClick = () => {
// 	amount++;
// 	console.log(amount);
// };

let num = 1;

plus.addEventListener("click", () => {
	if (num < 10) {
		num++;
		// console.log(num);
		amount.innerText = num;
		console.log(amount);
	}
});
minus.addEventListener("click", () => {
	if (num > 1) {
		num--;
		// console.log(num);
		amount.innerText = num;
		console.log(amount);
	}
});

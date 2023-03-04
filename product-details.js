const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage(index) {
	images.forEach((img) => {
		img.style.transform = `translateX(-${index * 100}%)`;
	});
}

function nextImage() {
	currentIndex++;
	if (currentIndex > images.length - 1) {
		currentIndex = 0;
	}
	showImage(currentIndex);
}

function prevImage() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}
	showImage(currentIndex);
}

setInterval(nextImage, 3000);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

let startX;
let startY;
let endX;
let endY;

carousel.addEventListener("touchstart", (e) => {
	startX = e.touches[0].clientX;
	startY = e.touches[0].clientY;
});

carousel.addEventListener("touchend", (e) => {
	endX = e.changedTouches[0].clientX;
	endY = e.changedTouches[0].clientY;
	if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
		if (startX > endX) {
			nextImage();
		} else if (startX < endX) {
			prevImage();
		}
	}
});

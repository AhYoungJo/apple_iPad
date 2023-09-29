const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

function showBasket() {
	basketEl.classList.add('show');
}

function removeBasket() {
	basketEl.classList.remove('show');
}

basketStarterEl.addEventListener('click', function (event) {
	event.stopPropagation();
	if (basketEl.classList.contains('show')) {
		removeBasket();
	} else {
		showBasket();
	}
});

basketEl.addEventListener('click', function (event) {
	event.stopPropagation();
});

window.addEventListener('click', function () {
	removeBasket();
});



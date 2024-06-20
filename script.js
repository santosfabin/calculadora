let divis = document.getElementsByTagName("div");
let display = document.getElementById("display");
divis = Array.from(divis);
let canusekeys = false;
let haveuse = false;
let canusepoint = true;
let firstkey = true;
let troca = false;
let passelivre = false;
let firstzero = true;
let temzero = false;
let aindazero = false;

divis.forEach(element => {
	element.addEventListener("click", () => {
		let key = element.textContent;

		function reset() {
			haveuse = false;
			canusepoint = true;
		}

		if (key === "=") {
			try {
				display.textContent = eval(display.textContent);
				canusekeys = true;
				reset();
				firstzero = true;
				passelivre = false;
				aindazero = false;
				if (display.textContent.includes(".")) {
					canusepoint = false;
				}
			} catch (error) {
				console.log(error);
			}
		} else if (key === "C") {
			display.textContent = "";
			firstkey = true;
			canusekeys = false;
			firstzero = true;
			passelivre = false;
			aindazero = false;

			reset();
		} else if (
			key === "/" ||
			key === "*" ||
			key === "-" ||
			key === "+" ||
			key === "."
		) {
			if (key === ".") {
				if (canusepoint && !firstkey && canusekeys) {
					display.textContent += key;
					canusekeys = false;
					canusepoint = false;
					troca = false;
					passelivre = true;
				}
			} else if (canusekeys) {
				display.textContent += key;
				haveuse = true;
				canusekeys = false;
				canusepoint = true;
				firstzero = true;
				passelivre = false;
				troca = true;
				aindazero = false

			} else if (troca) {
				canusekeys = false;
				display.textContent = display.textContent.slice(0, -1) + key;
			}
		} else {
			if (key === "0") {
				if (firstzero) {
					display.textContent += key;
					canusekeys = true;
					firstkey = false;
					troca = false;
					firstzero = false;
					temzero = true;
					aindazero = true;
				} else if (passelivre) {
					display.textContent += key;
					canusekeys = true;
					firstkey = false;
					troca = false;
					firstzero = false;
					aindazero = false;
				}
			} else {
				if (aindazero && !passelivre) {
					display.textContent = display.textContent.slice(0, -1) + key;
					aindazero = false;
					temzero = false;
				} else {
					display.textContent += key;
					canusekeys = true;
					firstkey = false;
					troca = false;
					passelivre = true;
					aindazero = false
				}
			}
		}
	});
});

/*  */

document.addEventListener("DOMContentLoaded", function () {
	const volumeSlider = document.getElementById("buttom-slider");

    if (localStorage.getItem("theme") === "light") {
        volumeSlider.value = 0;
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        volumeSlider.value = 100;
        document.body.classList.remove("light");
        localStorage.removeItem("theme");
    }
	volumeSlider.addEventListener("change", function () {
		let volumeValue = parseInt(volumeSlider.value);

		if (volumeValue > 50) {
			volumeSlider.value = 100;
			document.body.classList.remove("light");
            localStorage.removeItem("theme");
		} else {
			volumeSlider.value = 0;
			document.body.classList.add("light");
            localStorage.setItem("theme", "light");
		}
	});
});


/*  */



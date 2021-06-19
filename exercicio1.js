// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let calcularButton = getElement('#calcular')
calcularButton.addEventListener('click', calcular);

function getElement(querySelector) {
	return document.querySelector(querySelector)
}

function calcular() {
	let G = getElement("#constante").value;
	let M1 = getElement("#massa1").value;
	let M2 = getElement("#massa2").value;
	let d = getElement("#distancia").value;
	let resultadoElement = getElement('#resultado');

	if (G && M1 && M2 && d)
		resultadoElement.value = (G * M1 * M2) / (d * d);
}


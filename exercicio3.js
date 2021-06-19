// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
function getElements(querySelector) {
	return document.querySelectorAll(querySelector)
}
let buttons = getElements(".botao-expandir-retrair");
buttons.forEach(button => { button.addEventListener('click', expandableButtonClick) });

function expandableButtonClick(e) {
	let clickedElement = e.currentTarget;
	let parentElement = clickedElement.parentNode;
	parentElement.classList.toggle('expandido');
	clickedElement.innerText = parentElement.classList.contains('expandido') ? "-" : "+";
}
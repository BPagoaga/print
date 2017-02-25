let app = document.getElementById(('app')),
	clear = document.getElementById('clear'),
	count = 0

/**
 * Réinitialise le localstorage
 */
clear.onclick = function() {
	localStorage.clear()
	app.innerHTML = ''
};

/**
 * Créé une cellule
 * String litteral allows to create a template easily
 * @param  {object} cell, properties : marque, ref, euros, cents
 * @return {string}     [DOM element]
 */
const createCell = function(obj) {
	let cell = `<div class="col-xs-6">${obj.marque} - ${obj.ref} - ${obj.euros} - ${obj.cents}</div>`
	return cell
}

/**
 * Cell Constructor
 * @param {string} marque
 * @param {string} ref   
 * @param {number} euros 
 * @param {number} cents 
 */
const Cell = function(marque, ref, euros, cents) {
	this.marque = marque
	this.ref = ref
	this.euros = euros
	this.cents = cents
}

/**
 * enregistrement des données en local lors de la soumission du formulaire
 * @param  {DOM element} form
 */
function submitForm(form) {
	let cell = new Cell(form.marque.value, form.ref.value ,form.euros.value, form.cents.value),
		cellWrapper = document.createElement('div')

	cellWrapper.classList.add('col-xs-6')		

	localStorage.setItem(count, JSON.stringify(cell));
	cell = createCell(JSON.parse(localStorage.getItem(count)));
	cellWrapper.innerHTML = cell
	app.appendChild(cellWrapper)

	form.reset()
	count ++
};
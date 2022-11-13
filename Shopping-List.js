var list = {
	shoppingArray: ['test', 'loop'],
	title: document.getElementById('sl')
}
var input = {
	inputElement : document.querySelector('sItem'),
	btn : document.getElementById('btn'),
	addItem: btn?.addEventListener('click', function(event){ //? optional chaining - If the object is undefined or null it returns undefined instead of error
		event.preventDefault();//prevents the page from reloading
		list.shoppingArray.push(this.inputElement);
		console.log(list.shoppingArray);
	})
};




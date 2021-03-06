function addToCard(id) {
	let cart = [];

	if (localStorage.getItem('products')){
		cart = JSON.parse(localStorage.getItem('products'));
	}
	
	addProductToCard(id, cart);
	updateCart();

	alert("Your product has been added to the cart");
}

function addProductToCard(id, cart) {
	var quantity = parseInt($("#quantity").val());
	console.log("quantity = " + quantity);

	if (cart != null) {
		for (var i = 0; i < cart.length; ++ i) {
			if (cart[i].product.id == id) {
				cart[i].count += quantity;
				localStorage.setItem('products', JSON.stringify(cart));
				return;
			}
		}
	}

	cart.push({product: products[id - 1], count: quantity})
	localStorage.setItem('products', JSON.stringify(cart));
}
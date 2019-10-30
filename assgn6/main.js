// change image based off glaze choice
function chooseglaze() {
	var x = document.getElementById('glaze').value;
	if (x == "none") {
		document.getElementById('cinnaroll').src= 'https://i.ibb.co/DL7QkWd/noglaze.png';
	}
	if (x == "sugar milk") {
		document.getElementById('cinnaroll').src= 'https://i.ibb.co/09v1H1S/psroll.png';
	}
	if (x == "vanilla milk") {
		document.getElementById('cinnaroll').src= 'https://i.ibb.co/09v1H1S/psroll.png';
	}
	if  (x == "double chocolate") {
		document.getElementById('cinnaroll').src= 'https://i.ibb.co/FH8PJFn/chocolate.png';
	}
}

// update price based on quantity choice
function pricechange() {
	var x = document.getElementById('quantity').value;
	if (x == "1") {
		document.getElementById('price').innerHTML= "TOTAL PRICE: $6";
	}
	if (x == "3") {
		document.getElementById('price').innerHTML= "TOTAL PRICE: $15";
	}
	if (x == "6") {
		document.getElementById('price').innerHTML= "TOTAL PRICE: $27";
	}
	if  (x == "12") {
		document.getElementById('price').innerHTML= "TOTAL PRICE: $48";
	} 
}

// update number in cart when added to cart
function addtocart() {
	var x = document.getElementById('quantity').value;
	if (x == "1") {
		document.getElementById('cart').src= 'https://i.ibb.co/5L5S2WD/box-01.png';
	}
	if (x == "3") {
		document.getElementById('cart').src= 'https://i.ibb.co/Bc0kNCw/box-02.png';
	}
	if (x == "6") {
		document.getElementById('cart').src= 'https://i.ibb.co/GxW6ykR/box-03.png';
	}
	if  (x == "12") {
		document.getElementById('cart').src= 'https://i.ibb.co/3MpkTty/box-04.png';
	} 

	var selectedGlaze  = document.getElementById("glaze").selectedIndex;
	var actualGlaze = document.getElementById("glaze").options[selectedId].innerHTML;

	var selectedQuantity  = document.getElementById("quantity").selectedIndex;
	var actualQuantity = document.getElementById("quantity").options[selectedId].innerHTML;

	cartItems = {glaze: actualGlaze, quantity: ActualQuantity};

	localStorage.setItem("productDetails", JSON.stringify(cartItems));
}

// remove item on X button
function remove() {
	document.getElementById('item').innerHTML= "EMPTY CART!";
}

// update description on load
function loadroll() {
	var details = localStorage.getItem("productDetails");
	details = JSON.parse(details);

	document.getElementById('description').textContent = "PUMPKIN SPICE CINNAMON ROLL WITH" + " " + details.glaze;
	document.getElementById('quantity').value = details.quantity;
}
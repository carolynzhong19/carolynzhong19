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
}

function saveroll() {

}

function remove() {
	document.getElementById('item').remove();
}

function onload() {

}

function loadglaze() {

}

function loadquantity() {

}
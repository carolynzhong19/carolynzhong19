function addtocart() {
	document.getElementById('cart').src='https://i.ibb.co/TTCWwG8/box1.png'
}

function chooseglaze() {
	var x = document.getElementById('glaze').value;
	if (x == "none") {
		document.getElementById('cinnaroll').src= 'https://i.ibb.co/DL7QkWd/noglaze.png';
	}
	if  (x == "double chocolate") {
		document.getElementById('cinnaroll').src= 'https://i.ibb.co/FH8PJFn/chocolate.png';
	}
}
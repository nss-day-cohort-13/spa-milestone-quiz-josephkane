var CarLot = (function (oldCarLot) {

	oldCarLot.changeStyle = function (id, color) {
		console.log(color);
		document.getElementById(id).style.border = `4px solid ${color}`;
		var identifier = id.slice(3);
		identifier = parseInt(identifier);
		console.log(identifier);
	}

	return oldCarLot;

})(CarLot);
var CarLot = (function (oldCarLot) {

	var clickCounter = 0;
	var oldId = "";

	oldCarLot.getOldId = function () {
		return oldId;
	}

	oldCarLot.changeStyle = function (id, color) {
		console.log("passed id:", id);
		document.getElementById(id).style.border = `4px solid ${color}`;
		// var identifier = id.slice(3);
		// identifier = parseInt(identifier);
		clickCounter++;
		if (clickCounter > 1) {
			oldCarLot.changeStyleBack(oldId, clickCounter);
			oldId = id
		} else {
			oldId = id;
			console.log("old id:", oldId);
		}
	}

	oldCarLot.changeStyleBack = function (id, clickCounter) {
		console.log("id:", id);
		console.log("cc:", clickCounter);
		document.getElementById(id).style.border = `2px solid black`;

	}

	return oldCarLot;

})(CarLot);
var CarLot = (function (oldCarLot) {

	var clickCounter = 0;
	var oldId = "";

	oldCarLot.changeStyle = function (id, color) {
		console.log(id, color);
		document.getElementById(id).classList.add("border-thick");
		clickCounter++;
		if (clickCounter > 1) {
			oldCarLot.changeStyleBack(oldId);
			oldId = id
		} else {
			oldId = id;
		}
		oldCarLot.getSelectedId(id);
		document.getElementById("textInputBar").focus();
	}

	oldCarLot.changeStyleBack = function (id, clickCounter) {
		document.getElementById(id).classList.remove("border-thick");
	}

	return oldCarLot;

})(CarLot);
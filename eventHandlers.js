var CarLot = (function(oldCarLot){


	oldCarLot.activateEvents = function (array) {
		var inventoryCards = document.getElementsByClassName("inventoryCard");
		console.log(array);

		for (var i = 0; i < inventoryCards.length; i++) {
			inventoryCards[i].addEventListener("click", function(e) {
				CarLot.changeStyle(e.currentTarget.id, array[parseInt(e.currentTarget.id.slice(3)) - 1].color);
				console.log();
			});
		}
	}

	return oldCarLot;

})(CarLot);
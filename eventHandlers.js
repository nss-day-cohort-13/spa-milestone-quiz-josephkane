var CarLot = (function(oldCarLot){


	oldCarLot.activateEvents = function () {
		var inventoryCards = document.getElementsByClassName("inventoryCard");

		for (var i = 0; i < inventoryCards.length; i++) {
			inventoryCards[i].addEventListener("click", function(e) {
				console.log(e.currentTarget.id);
			});
		}


	}

	return oldCarLot;

})(CarLot);
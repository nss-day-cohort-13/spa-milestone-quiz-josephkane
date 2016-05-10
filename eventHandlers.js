var CarLot = (function(oldCarLot){

	var selectedId = "";
	var userInput = document.getElementById("textInputBar");

	oldCarLot.activateEvents = function (array) {
		var inventoryCards = document.getElementsByClassName("inventoryCard");
		var textInputBar = document.getElementById("textInputBar");

		textInputBar.addEventListener("click", function () {
			if (selectedId === ""){

			} else {

			}
		});


		for (var i = 0; i < inventoryCards.length; i++) {
			inventoryCards[i].addEventListener("click", function(e) {
				CarLot.changeStyle(e.currentTarget.id, array[parseInt(e.currentTarget.id.slice(3)) - 1].color);
				oldCarLot.editDescription(selectedId);
			});
		}

	}

	oldCarLot.getSelectedId = function (id) {
		selectedId = id;
	}

	oldCarLot.editDescription = function (id) {
		var selectedCard = document.getElementById(id);
		var carDescription = selectedCard.children[1].children[2];

		userInput.value = "";
		carDescription.innerHTML = "";
		textInputBar.addEventListener("keyup", function (event) {
			carDescription.innerHTML = userInput.value;
		});
	}

	return oldCarLot;

})(CarLot);
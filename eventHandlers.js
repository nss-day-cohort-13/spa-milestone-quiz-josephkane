var CarLot = (function(oldCarLot){

	var carDescription = "";
	var selectedId = "";
	var userInput = document.getElementById("textInputBar");

	oldCarLot.activateEvents = function (array) {
		var inventoryCards = document.getElementsByClassName("inventoryCard");
		var submitButton = document.getElementById("submitButton");

		for (var i = 0; i < inventoryCards.length; i++) {
			inventoryCards[i].addEventListener("click", function(e) {
				oldCarLot.changeStyle(e.currentTarget.id, array[parseInt(e.currentTarget.id.slice(3)) - 1].color);
				oldCarLot.editDescription(selectedId);
			});
		}

		submitButton.addEventListener("click", function () {
			if (userInput.value === "") {

			} else {
				oldCarLot.setNewDescription(selectedId, userInput);
			}
		});

		userInput.addEventListener("keyup", function (event) {
			if (event.keyCode === 13) {
				if (userInput.value === "") {

				} else {
					oldCarLot.setNewDescription(selectedId, userInput);
				}
			}
		});


	}

	oldCarLot.getSelectedId = function (id) {
		selectedId = id;
	}

	oldCarLot.editDescription = function (id) {
		var selectedCard = document.getElementById(id);
		carDescription = selectedCard.children[1].children[2];

		userInput.value = carDescription.innerHTML;
		userInput.addEventListener("keyup", function (event) {
			carDescription.innerHTML = userInput.value;
		});
	}

	return oldCarLot;

})(CarLot);

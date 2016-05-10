var CarLot = (function(oldCarLot){

	var inventory = [];
	var selectedId = "";
	var userInput = document.getElementById("textInputBar");

	oldCarLot.getInventory = function () {
		return inventory;
	},

	oldCarLot.putJSONInInventory = function (array) {
			for (var i = 0; i < array.length; i++) {
				inventory.push(array[i]);
			}
		populateDOM(inventory);
	}

	oldCarLot.activateEvents = function (array) {
		var inventoryCards = document.getElementsByClassName("inventoryCard");
		var textInputBar = document.getElementById("textInputBar");
		var submitButton = document.getElementById("submitButton");

		submitButton.addEventListener("click", function () {
			oldCarLot.modifyArray(selectedId);
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

	oldCarLot.modifyArray = function (id) {
		inventory[(id.slice(3) - 1)].description = userInput.value;
		populateDOM(inventory);
	}

	return oldCarLot;

})(CarLot);
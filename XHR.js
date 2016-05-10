var CarLot = (function (){
	var inventory = [];

	return {
		getInventory: function () {
			return inventory;
		},

		setInventory: function () {

			var dataRequest = new XMLHttpRequest();
			dataRequest.addEventListener("load", function() {
				var inventoryData = JSON.parse(this.responseText);
				var inventoryArray = inventoryData.cars;
				for (var i = 0; i < inventoryArray.length; i++) {
					inventory.push(inventoryArray[i]);
				}
			populateDOM(inventory);
			});
			dataRequest.open("GET", "inventory.json");
			dataRequest.send();
		},

		setNewDescription: function(id, userInput) {
			inventory[(id.slice(3) - 1)].description = userInput.value;
			populateDOM(inventory);
		}
	}
})();

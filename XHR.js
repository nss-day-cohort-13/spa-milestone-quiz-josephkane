var CarLot = (function(){

	return {

		setInventory: function() {

			var dataRequest = new XMLHttpRequest();
			dataRequest.addEventListener("load", function() {
				var inventoryData = JSON.parse(this.responseText);
				var inventoryArray = inventoryData.cars;
				CarLot.putJSONInInventory(inventoryArray);
			});
			dataRequest.open("GET", "inventory.json");
			dataRequest.send();
		}
	}
})();
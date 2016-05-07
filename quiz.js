
CarLot.setInventory();

function populateDOM (array) {
	var HTML = "";
	for (var i = 0; i < array.length; i++) {
		HTML +=	`<div id="id-${array[i].id}" class="col-md-4 col-xs-4 inventoryCard">
		          <h3 class="cardHeadline">${array[i].make} ${array[i].model}</h3>
		          <ul>
		            <li>${array[i].color}</li>
		            <li>${array[i].year}</li>
		            <li>${array[i].description}</li>
		            <li>${array[i].price}</li>
		          </ul>
		          <h4 class="availability"></h4>
	        	</div>`;
	};
	document.getElementById("inventory").innerHTML = HTML;
	CarLot.activateEvents(array);
	console.log(array);
}


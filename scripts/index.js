// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementsByName(slct1);
    var s2 = document.getElementById(slct2);
	var chosenPrefs = [];
	for (i = 0; i < s1.length; i ++) {
		if (s1[i].checked) {
			chosenPrefs.push(s1[i].value);
		}
	}
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, chosenPrefs);
		
	for (let i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " $" + productPrice));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (let i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

function chooseRetrivalMethod(slct1, slct2) {
	var s1 = document.getElementsByName(slct1);	//gets which radio is selected
    var s2 = document.getElementById(slct2); 	//div where form will be displayed
	var chosenPrefs = [];
	for (i = 0; i < s1.length; i ++) {
		if (s1[i].checked) {
			chosenPrefs.push(s1[i].value);
		}
	}

	s2.innerHTML = "";

	if (chosenPrefs[0] == "Pickup") {
		var h = document.createElement("H2");
		var t = document.createTextNode(chosenPrefs[0]);
		h.appendChild(t);
		s2.appendChild(h);

		var p1 = document.createElement("P");
		var text1 = document.createTextNode("First name:");
		p1.appendChild(text1);
		s2.appendChild(p1);

		var firstName = document.createElement("input");
		firstName.id = "modifiedInput";
		firstName.type = "text";
		firstName.name = "firstName";
		firstName.value = "First name";
		firstName.label = "First name";
		firstName.size = "20";
		s2.appendChild(firstName);

		s2.appendChild(document.createElement("br"));  
		
		var p2 = document.createElement("P");
		var text2 = document.createTextNode("Last name:");
		p2.appendChild(text2);
		s2.appendChild(p2);
		var lastName = document.createElement("input");
		lastName.id = "modifiedInput";
		lastName.type = "text";
		lastName.name = "lastName";
		lastName.value = "Last name";
		lastName.label = "Last name";
		lastName.size = "20";
		s2.appendChild(lastName); 

		s2.appendChild(document.createElement("br"));  
		
		var p3 = document.createElement("P");
		var text3 = document.createTextNode("Phone number:");
		p3.appendChild(text3);
		s2.appendChild(p3);
		var phone = document.createElement("input");
		phone.id = "modifiedInput";
		phone.type = "text";
		phone.name = "phone";
		phone.value = "Phone number";
		phone.label = "Phone number";
		phone.size = "20";
		s2.appendChild(phone);

		s2.appendChild(document.createElement("br"));  

		var p4 = document.createElement("P");
		var text4 = document.createTextNode("Email:");
		p4.appendChild(text4);
		s2.appendChild(p4);
		var email = document.createElement("input");
		email.id = "modifiedInput";
		email.type = "text";
		email.name = "email";
		email.value = "Email";
		email.label = "Email";
		email.size = "20";
		s2.appendChild(email);

		var p5 = document.createElement("P");
		var text5 = document.createTextNode("Select which Vivienne's Supermarket location you'd like to curbside pick up your groceries at.");
		p5.appendChild(text5);
		s2.appendChild(p5);

		var selectLocation = document.createElement("SELECT");
		var selectLocationValues = ["", "Barrhaven", "Nepean", "Downtown Ottawa", "Kanata"];
		selectLocation.id = "selectModified";
		s2.appendChild(selectLocation);

		for (var i = 0; i < selectLocationValues.length; i ++) {
			var options = document.createElement("option");
			options.value = selectLocationValues[i];
			options.text = selectLocationValues[i];
			selectLocation.appendChild(options);
		}

		var p6 = document.createElement("P");
		var text6 = document.createTextNode("Select which time slot you'd like to curbside pick up your groceries at.");
		p6.appendChild(text6);
		s2.appendChild(p6);

		var selectTime = document.createElement("SELECT");
		var selectTimeValues = ["", "10am-11am", "11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm"];
		selectTime.id = "selectModified";
		s2.appendChild(selectTime);

		for (var i = 0; i < selectTimeValues.length; i ++) {
			var options = document.createElement("option");
			options.value = selectTimeValues[i];
			options.text = selectTimeValues[i];
			selectTime.appendChild(options);
		}

		var p7 = document.createElement("P");
		var text7 = document.createTextNode("Please park at the designated curbside pickup parking spots near the main entrance. Call 289-681-1448 once parked to inform us you have arrived and an employee will bring out your groceries.");
		p7.appendChild(text7);
		s2.appendChild(p7);

	} else if (chosenPrefs[0] == "Delivery") {
		var h = document.createElement("H2");
		var t = document.createTextNode(chosenPrefs[0]);
		h.appendChild(t);
		s2.appendChild(h);

		var p1 = document.createElement("P");
		var text1 = document.createTextNode("First name:");
		p1.appendChild(text1);
		s2.appendChild(p1);

		var firstName = document.createElement("input");
		firstName.id = "modifiedInput";
		firstName.type = "text";
		firstName.name = "firstName";
		firstName.value = "First name";
		firstName.label = "First name";
		firstName.size = "20";
		s2.appendChild(firstName);

		s2.appendChild(document.createElement("br"));  
		
		var p2 = document.createElement("P");
		var text2 = document.createTextNode("Last name:");
		p2.appendChild(text2);
		s2.appendChild(p2);
		var lastName = document.createElement("input");
		lastName.id = "modifiedInput";
		lastName.type = "text";
		lastName.name = "lastName";
		lastName.value = "Last name";
		lastName.label = "Last name";
		lastName.size = "20";
		s2.appendChild(lastName);

		s2.appendChild(document.createElement("br"));  
		
		var p3 = document.createElement("P");
		var text3 = document.createTextNode("Address:");
		p3.appendChild(text3);
		s2.appendChild(p3);
		var address = document.createElement("input");
		address.id = "modifiedInput";
		address.type = "text";
		address.name = "address";
		address.value = "Address";
		address.label = "Address";
		address.size = "50";
		s2.appendChild(address);

		s2.appendChild(document.createElement("br"));  
		
		var p4 = document.createElement("P");
		var text4 = document.createTextNode("City:");
		p4.appendChild(text4);
		s2.appendChild(p4);
		var city = document.createElement("input");
		city.id = "modifiedInput";
		city.type = "text";
		city.name = "city";
		city.value = "City";
		city.label = "City";
		city.size = "20";
		s2.appendChild(city);

		s2.appendChild(document.createElement("br"));  
		
		var p5 = document.createElement("P");
		var text5 = document.createTextNode("Province:");
		p5.appendChild(text5);
		s2.appendChild(p5);
		var prov = document.createElement("input");
		prov.id = "modifiedInput";
		prov.type = "text";
		prov.name = "prov";
		prov.value = "Province";
		prov.label = "Province";
		prov.size = "20";
		s2.appendChild(prov);

		s2.appendChild(document.createElement("br"));  
		
		var p6 = document.createElement("P");
		var text6 = document.createTextNode("Postal code:");
		p6.appendChild(text6);
		s2.appendChild(p6);
		var pc = document.createElement("input");
		pc.id = "modifiedInput";
		pc.type = "text";
		pc.name = "pc";
		pc.value = "Postal code";
		pc.label = "Postal code";
		pc.size = "20";
		s2.appendChild(pc);

		s2.appendChild(document.createElement("br"));  
		
		var p7 = document.createElement("P");
		var text7 = document.createTextNode("Phone number:");
		p7.appendChild(text7);
		s2.appendChild(p7);
		var phone = document.createElement("input");
		phone.id = "modifiedInput";
		phone.type = "text";
		phone.name = "phone";
		phone.value = "Phone number";
		phone.label = "Phone number";
		phone.size = "20";
		s2.appendChild(phone);

		s2.appendChild(document.createElement("br"));  

		var p8 = document.createElement("P");
		var text8 = document.createTextNode("Email:");
		p8.appendChild(text8);
		s2.appendChild(p8);
		var email = document.createElement("input");
		email.id = "modifiedInput";
		email.type = "text";
		email.name = "email";
		email.value = "Email";
		email.label = "Email";
		email.size = "20";
		s2.appendChild(email);

		var p9 = document.createElement("P");
		var text9 = document.createTextNode("Please check your email for a confirmation of your order and an estimated delivery date.");
		p9.appendChild(text9);
		s2.appendChild(p9);
	}
}
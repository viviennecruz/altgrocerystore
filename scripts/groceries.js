// code based on Professor Caroline Barriere's example

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Bananas (organic)",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 1.99
	},
	{
		name: "Apples",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 2.00
	},
	{
		name: "Bread",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 2.35
	},	
	{
		name: "Trail mix",
		lactoseIntolerant: false,
		nutAllergy: false,
        organic: false,
		price: 3.00
	},
	{
		name: "Carrots (organic)",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 3.10
	},
	{
		name: "Almond milk",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: false,
		price: 3.99
	},
	{
		name: "Strawberries",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 4.00
	},
	{
		name: "Yogurt (organic)",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: true,
		price: 4.50
	},
	{
		name: "Chicken breast (organic)",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 5.25
	},
	{
		name: "2% Milk",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 5.60
	},
	{
		name: "Salmon (organic)",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 7.00
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction.includes("nutAllergy")) && (restriction.includes("lactoseIntolerant")) && (prods[i].lactoseIntolerant == true) && (prods[i].nutAllergy == true) && (prods[i].organic == false)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("lactoseIntolerant")) && !(restriction.includes("nutAllergy")) && !(restriction.includes("organic")) && (prods[i].lactoseIntolerant == true) && (prods[i].organic == false)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("nutAllergy")) && !(restriction.includes("lactoseIntolerant")) && (prods[i].nutAllergy == true) && (prods[i].organic == false)){
			product_names.push(prods[i]);
		}
		else if ((restriction.includes("organic")) && (prods[i].organic == true)){
			product_names.push(prods[i]); 
		}
		else if (restriction.includes("none")){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
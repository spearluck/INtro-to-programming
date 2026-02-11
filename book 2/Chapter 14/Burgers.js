// Add a click event listener to the button with id "placeOrder"
document.getElementById("placeOrder").addEventListener("click", placeOrder);

function placeOrder() {

    // Get the number of burgers from the input field
    var numBurgers = document.getElementById("numBurgers").value;

    // Get the selected burger type
    var typeBurger = document.getElementById("typeBurger").value;

    // Get the selected delivery city
    var deliveryCity = document.getElementById("deliveryCity").value;

    // Get the birthday option (yes or no)
    var birthday = document.getElementById("Deluxe").value;

    // Calculate the base price of the order
    var orderPrice = calculatePrice(numBurgers, typeBurger);

    // Calculate the delivery cost
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // Start building the output message
    var theOutput = "<p>Thank you for your order.</p>";

    // Check if delivery is free
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice;
    }

    // Add the total cost (order price + delivery price)
    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);

    // Display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

// This function calculates the burger order price
function calculatePrice(numBurgers, typeBurger) {

    // Base price: $8 per burger
    var orderPrice = Number(numBurgers) * 8;

    // Extra charge starts at 0
    var extraCharge = 0;

    // If the burger type is "deluxe", add $2 per burger extra
    if (typeBurger === "Deluxe") {
        extraCharge = Number(numBurgers) * 5;
    }

    // Add the extra charge to the order price
    orderPrice += extraCharge;

    return orderPrice;
}


// This function calculates the delivery cost
function calculateDelivery(orderPrice, deliveryCity, typeBurger) {

    var deliveryPrice = 0;

    // Free delivery if:
    // City is "Unnamed" AND order is more than $10
    // OR it is the customer's request a Delux?
    if (((deliveryCity === "Unnamed") && (orderPrice > 10)) || (typeBurger === "Deluxe")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 20;
    }

    return deliveryPrice;
}
// Extra charge depending on pizza type
if (typeBurger === "Pork") {
    pricePerBurger += 1;
} else if (typeBurger === "Beef") {
    pricePerBurger += 2;
} else if (typeBurger === "Chicken") {
    pricePerBurger += 2;
} else if (typeBurger === "Triple") {
    pricePerBurger += 3;
} else {
    // No extra charge (cheese or pepperoni)
}
var dreamCar = {
    make: "caveman",
    model: "1",
    color: "pink",
    year: "2800BC",
    bodyStyle: "Luxury Car",
    price: "2 cokes and 1 can of pringles"
};

alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
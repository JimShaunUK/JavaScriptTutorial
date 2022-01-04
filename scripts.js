

//invoice example
var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;

document.getElementById("userSign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;

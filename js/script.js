// ===============================
// LOGIN VALIDATION
// ===============================

function validateLogin() {

let name = document.getElementById("username").value.trim();
let phone = document.getElementById("phone").value.trim();

let phonePattern = /^[0-9]{10}$/;

if(name === ""){
alert("Please enter your name");
return false;
}

if(!phonePattern.test(phone)){
alert("Enter valid 10 digit phone number");
return false;
}

alert("Welcome " + name + " to Ruchi Raagam!");

return true;

}


// ===============================
// NAVIGATION
// ===============================

let menuBtn = document.getElementById("menuBtn");

if(menuBtn){

menuBtn.addEventListener("click", function(){

window.location.href = "pages/menu.html";

});

}


// ===============================
// ORDER TYPE SELECTION
// ===============================

let orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {

button.addEventListener("click", function(){

let type = button.dataset.type;

if(type === "dinein"){
alert("You selected Dine-In. Please book a table.");
window.location.href = "pages/booking.html";
}

if(type === "delivery"){
alert("Home Delivery selected");
window.location.href = "pages/order.html";
}

if(type === "takeaway"){
alert("Takeaway selected");
window.location.href = "pages/order.html";
}

});

});



// ===============================
// TABLE BOOKING
// ===============================

function bookTable(){

let name = document.getElementById("bname").value;
let phone = document.getElementById("bphone").value;
let people = document.getElementById("people").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

if(name === "" || phone === "" || people === "" || date === "" || time === ""){

alert("Please fill all booking details");
return;

}

alert(
"Table booked successfully!\n\n" +
"Name: " + name +
"\nPeople: " + people +
"\nDate: " + date +
"\nTime: " + time
);

}



// ===============================
// MENU DATA
// ===============================

const menu = {

andhra: [

{name:"Andhra Chicken Curry", price:250},
{name:"Gongura Mutton", price:320},
{name:"Pappu & Rice", price:120},
{name:"Andhra Biryani", price:260}

],

hyderabadi: [

{name:"Hyderabadi Biryani", price:280},
{name:"Chicken Haleem (Halal)", price:200},
{name:"Mutton Biryani", price:320},
{name:"Double Ka Meetha", price:150}

],

chinese: [

{name:"Veg Manchurian", price:180},
{name:"Hakka Noodles", price:170},
{name:"Fried Rice", price:160},
{name:"Chilli Chicken", price:220}

],

korean: [

{name:"Bibimbap", price:300},
{name:"Korean BBQ Chicken", price:350},
{name:"Kimchi Rice", price:260}

],

japanese: [

{name:"Sushi Roll", price:400},
{name:"Ramen Bowl", price:320},
{name:"Tempura", price:350}

]

};



// ===============================
// CART SYSTEM
// ===============================

let cart = [];

function addToCart(itemName, price){

cart.push({
name:itemName,
price:price
});

alert(itemName + " added to cart");

updateCart();

}



// ===============================
// UPDATE CART
// ===============================

function updateCart(){

let cartContainer = document.getElementById("cartItems");
let totalContainer = document.getElementById("total");

if(!cartContainer) return;

cartContainer.innerHTML = "";

let total = 0;

cart.forEach(item => {

let li = document.createElement("li");

li.textContent = item.name + " - ₹" + item.price;

cartContainer.appendChild(li);

total += item.price;

});

if(totalContainer){
totalContainer.textContent = "Total: ₹" + total;
}

}



// ===============================
// PLACE ORDER
// ===============================

function placeOrder(){

if(cart.length === 0){

alert("Cart is empty");
return;

}

let summary = "Your Order:\n\n";

let total = 0;

cart.forEach(item => {

summary += item.name + " - ₹" + item.price + "\n";

total += item.price;

});

summary += "\nTotal: ₹" + total;

alert(summary);

cart = [];

updateCart();

}



// ===============================
// MENU FILTER (BY CULTURE)
// ===============================

function showMenu(culture){

let container = document.getElementById("menuItems");

if(!container) return;

container.innerHTML = "";

menu[culture].forEach(item => {

let div = document.createElement("div");

div.classList.add("menu-card");

div.innerHTML = `

<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addToCart('${item.name}',${item.price})">
Add to Cart
</button>

`;

container.appendChild(div);

});

}
let cart = [];
let subtotal = 0;

const menuData = {

andhra: [
{name:"Andhra Meals", price:120},
{name:"Chicken Fry", price:200},
{name:"Pesarattu", price:80}
],

hyderabadi: [
{name:"Hyderabadi Biryani", price:250},
{name:"Mutton Biryani", price:320}
],

chinese: [
{name:"Noodles", price:150},
{name:"Manchurian", price:170}
],

korean: [
{name:"Kimchi Rice", price:220},
{name:"Korean BBQ", price:350}
],

japanese: [
{name:"Sushi", price:300},
{name:"Ramen", price:240}
]

};



function loadMenu(type){

const menuDiv = document.getElementById("menuItems");

menuDiv.innerHTML = "";

menuData[type].forEach(item => {

let card = document.createElement("div");

card.className = "menu-card";

card.innerHTML = `

<h4>${item.name}</h4>
<p>₹${item.price}</p>

<div class="counter">

<button onclick="addToCart('${item.name}',${item.price})">Add</button>

</div>

`;

menuDiv.appendChild(card);

});

}



function addToCart(name,price){

cart.push({name,price});

subtotal += price;

updateCart();

}



function updateCart(){

const cartList = document.getElementById("cartItems");

cartList.innerHTML="";

cart.forEach(item => {

let li = document.createElement("li");

li.innerText = item.name + " - ₹" + item.price;

cartList.appendChild(li);

});

document.getElementById("total").innerText = "Subtotal: ₹" + subtotal;

updateBilling();

}



function updateBilling(){

let gst = subtotal * 0.05;

let finalTotal = subtotal + gst;

document.getElementById("subtotal").innerText = "₹" + subtotal;

document.getElementById("gst").innerText = "₹" + gst.toFixed(2);

document.getElementById("finalTotal").innerText = "₹" + finalTotal.toFixed(2);

}



function placeOrder(){

let method = document.getElementById("paymentMethod").value;

alert("Order placed successfully! Payment via " + method);

cart = [];

subtotal = 0;

updateCart();

}



function submitFeedback(){

let text = document.getElementById("feedbackText").value;

if(text===""){
alert("Please write feedback");
return;
}

alert("Thank you for your feedback!");

document.getElementById("feedbackText").value="";

}
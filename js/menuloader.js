let menuData = {};

fetch("../data/menu.json")
.then(response => response.json())
.then(data => {
menuData = data;
loadMenu("andhra");
});

function loadMenu(culture){

let container = document.getElementById("menuItems");

container.innerHTML="";

menuData[culture].forEach(item => {

let div=document.createElement("div");

div.classList.add("menu-card");

div.innerHTML=`

<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addToCart('${item.name}',${item.price})">
Add to Cart
</button>

`;

container.appendChild(div);

});

}
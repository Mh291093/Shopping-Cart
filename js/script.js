// Define Products

let productsDom = document.querySelector(".products");
let cartProductMenu = document.querySelector(".carts-products");
let cartProductDivDom = document.querySelector(".carts-products div");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let badgeDom = document.querySelector(".badge");

let products = [
    {
        id: 1,
        title: "headphone item",
        size: "large",
        imageUrl: "images/headphone.jpg",
    },
    {
        id: 2,
        title: "laptop item",
        size: "small",
        imageUrl: "images/laptop.jpg",
    },
    {
        id: 3,
        title: "watch item",
        size: "medium",
        imageUrl: "images/watch.jpg",
    },
    {
        id: 4,
        title: "glasses item",
        size: "large",
        imageUrl: "images/glasses.jpg",
    },
];

shoppingCartIcon.addEventListener("click", openCartMenu);

function drawProductsUI () {
    let productsUI = products.map((item) => {
        return `
            <div class="product-item">
                <img
                src="${item.imageUrl}"
                alt="headphone"
                class="product-item-img"
                />
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <span>Size: ${item.size}</span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onClick="(addedToCart(${item.id}))">Add To Cart</button>
                    <i class="favourite fa-regular fa-heart"></i>
                </div>
            </div>
        `;
    });
    productsDom.innerHTML = productsUI;
};

drawProductsUI();

let addedItem = [];
function addedToCart(id) {
    if(localStorage.getItem("username")) {
        let choosenItem = products.find((item) => item.id === id);
        cartProductDivDom.innerHTML += `<p>${choosenItem.title}</p>`;

        addedItem = [...addedItem, choosenItem];
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));
        let cartProductItems = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    } else {
        window.location = "login.html";
    };
};

function openCartMenu () {
    if(cartProductDivDom.innerHTML != "") {
        if(cartProductMenu.style.display == "block") {
            cartProductMenu.style.display == "none";
        } else {
            cartProductMenu.style.display == "block";
        };
    };
};

let productsInCart = localStorage.getItem("productsInCart");
let productsDom = document.querySelector(".products");

if(productsInCart) {
    let items = JSON.parse(productsInCart);
    drawCartProductsUI(items);
};

function drawCartProductsUI (products) {
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
                    <button class="add-to-cart" onClick="(removeFromCart(${item.id}))">Remove From Cart</button>
                </div>
            </div>
        `;
    });
    productsDom.innerHTML = productsUI;
};

drawCartProductsUI();
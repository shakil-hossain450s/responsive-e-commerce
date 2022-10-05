const loadProducts = () => {
    fetch(`products.json`)
        .then(res => res.json())
        .then(data => displayProducts(data))

}

const displayProducts = (products) => {
    const productsContainer = document.getElementById('first-product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <img class="w-full rounded-lg" src=${product.picture}>
            <div class="px-2">
                <span class="text-gray-500 text-[18px] mb-2">Adidas</span>
                <h5 class="text-[20px] font-semibold mb-2">${product.name}</h5>
                    <div class="text-orange-500">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h4 class="text-xl font-semibold my-3">$<span>${product.price}</span></h4>
            </div>
            <div class="flex justify-center items-center">
                <button class="w-[45%] mr-2 bg-[#1a5dec] px-5 py-2 text-white rounded-lg hover:bg-[#1d4499]">
                <i class="fa-solid fa-circle-info mr-2"></i>
                <span>Info</span>
                </button>
                <button class="w-[45%] ml-2 bg-[#eca219] px-5 py-2 text-white rounded-lg hover:bg-[#c98913]">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Buy</span>
                </button>
            </div>
        `;
        productsContainer.appendChild(productDiv);
    })
}

loadProducts();
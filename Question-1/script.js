const productGrid = document.getElementById('productGrid');
const loadMoreButton = document.getElementById('loadMore');
const searchBar = document.getElementById('searchBar');

let products = [];
let filteredProducts = [];
let displayedProducts = 0;
const productsPerPage = 12;

// Fetch products from JSON file
async function fetchProducts() {
    const response = await fetch('products.json');
    products = await response.json();
    filteredProducts = products;
    displayProducts();
}

function displayProducts() {
    const productsToDisplay = filteredProducts.slice(displayedProducts, displayedProducts + productsPerPage);

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Company: ${product.company}</p>
            <p>Price: ₹${product.price}</p>
        `;
        productGrid.appendChild(productDiv);
    });

    displayedProducts += productsPerPage;
    loadMoreButton.style.display = displayedProducts >= filteredProducts.length ? 'none' : 'block';
}


searchBar.addEventListener('input', () => {
    productGrid.innerHTML = '';
    const searchTerm = searchBar.value.toLowerCase();
    displayedProducts = 0;

    if (searchTerm === '') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.company.toLowerCase().includes(searchTerm)
        );
    }

    displayProducts();
});

// Load more products
loadMoreButton.addEventListener('click', displayProducts);


fetchProducts();

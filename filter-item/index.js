let mockData = fetch('http://fakestoreapi.com/products').then(res => {
    return res.json();
}).then(data => renderData(data)).catch(e => console.log(e));

let products = document.querySelector('.products');

// init data
function renderData(data) {
    products.innerHTML = ``;
    data.forEach(item => {
        let newProd = document.createElement('div');
        newProd.classList.add('product');
        newProd.innerHTML = `
            <img src="${item.image}">
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
        `;

        products.appendChild(newProd);
    });
}

let search = document.querySelector('input');

search.addEventListener('input', function(e) {
    let searchText = e.target.value.trim().toLowerCase();

    let productDOM = document.querySelectorAll('.product');
    productDOM.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchText)) {
            item.classList.remove('hide');
        }
        else {
            item.classList.add('hide');
        }
    })
})
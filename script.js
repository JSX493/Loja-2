document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.products-list');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = [];

    // Função para atualizar o carrinho na interface
    function updateCartUI() {
        cartItemsList.innerHTML = ''; // Limpa a lista atual
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>R$ ${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPriceSpan.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Adiciona o produto ao carrinho
    productList.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productElement = event.target.closest('.product-item');
            const productId = productElement.dataset.id;
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);

            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            updateCartUI();
            alert(`${productName} adicionado ao carrinho!`);
        }
    });

    // Função para finalizar a compra
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio. Adicione alguns itens antes de finalizar a compra.');
        } else {
            alert('Obrigado por comprar na Roube Blox! Para completar a compra adicione o "jvbgamer" no discord .');
            cart = []; // Esvazia o carrinho
            updateCartUI();
        }
    });
});
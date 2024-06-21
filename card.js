document.addEventListener("DOMContentLoaded", () => {
       
        const addToCartButtons = document.querySelectorAll('.add-to-card-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
        function addToCart(event) {
            const button = event.target;
            const productElement = button.closest('.item');
            const productId = productElement.getAttribute('data-product-id');
            const productTitle = productElement.getAttribute('data-product-title');
            const productDescription = productElement.getAttribute('data-product-description');
            const productPrice = productElement.getAttribute('data-product-price');
            const productImage = productElement.getAttribute('data-product-image');

            const product = {
                id: productId,
                title: productTitle,
                description: productDescription,
                price: productPrice,
                image: productImage
            };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
           
        }
    });


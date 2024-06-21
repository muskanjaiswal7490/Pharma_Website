document.addEventListener('DOMContentLoaded', function () {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productBox = this.closest('.item');
            const productId = productBox.dataset.productId;
            const productTitle = productBox.dataset.productTitle;
            const productDescription = productBox.dataset.productDescription;
            const productPrice = productBox.dataset.productPrice;
            const productImage = productBox.dataset.productImage;

            const product = {
                id: productId,
                title: productTitle,
                description: productDescription,
                price: productPrice,
                image: productImage
            };

            const icon = this.querySelector('.wishlist-icon');
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                addToWishlist(wishlist, product);
                console.log('Product added to wishlist:', product);
            } 
           
        });

        const productId = button.closest('.item').dataset.productId;
        if (isInWishlist(productId)) {
            button.querySelector('.wishlist-icon').classList.remove('fa-regular');
            button.querySelector('.wishlist-icon').classList.add('fa-solid');
        }
    });
});

function addToWishlist(wishlist, product) {
    if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}
// function removeFromWishlist(wishlist, productId) {
//     wishlist = wishlist.filter(item => item.id !== productId);
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
// }

function isInWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.some(item => item.id === productId);
}
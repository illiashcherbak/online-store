'use strict';
//==========================================

// Error output
export function showErrorMessage(message) {
   const h1 = document.querySelector('.wrapper h1');
   const msg = `
      <div class="error">
         <p>${message}</p>
         <p><a href="/">Go to product list!</a></p>
      </div>
   `;
   h1.insertAdjacentHTML('afterend', msg);
}

// Getting id from LS
export function getBasketLocalStorage() {
   const cartDataJSON = localStorage.getItem('basket');
   return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

// Adding product id to LS
export function setBasketLocalStorage(basket) {
   const basketCount = document.querySelector('.basket__count');
   localStorage.setItem('basket', JSON.stringify(basket));
   basketCount.textContent = basket.length;
}

// Check if the product id specified in LS exists
//(For example: if user hasn't visited the website for several days and the product that was in the cart has been sold)
export function checkingRelevanceValueBasket(productsData) {
   const basket = getBasketLocalStorage();

   basket.forEach((basketId, index) => {
      const existsInProducts = productsData.some(
         (item) => item.id === Number(basketId)
      );
      if (!existsInProducts) {
         basket.splice(index, 1);
      }
   });

   setBasketLocalStorage(basket);
}

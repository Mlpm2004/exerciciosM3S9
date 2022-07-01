
export function getCartTotal(wishlist) {
  let totalPrice = 0;
  
  for (let i = 0; i < wishlist.length; i++) {
    
    if (wishlist[i].salePrice==undefined && wishlist[i].salePrice==null) {
        const { price, addedToCart } = wishlist[i];
        if (addedToCart) {
        totalPrice += price;
        
    }else{
        if (wishlist[i].addedToCart) totalPrice += wishlist[i].salePrice}

    }
  }
  return totalPrice;
};




import { getCartTotal } from '../utils/getCartTotal';
const wishlist = [
  { id: "4027", addedToCart: true, price: 20.0 },
  { id: "5301", addedToCart: false, price: 20.0 },
  { id: "6711", addedToCart: true, price: 20.0 },
  { id: "1244", addedToCart: false, price: 20.0 },
  { id: "4765", addedToCart: true, price: 20.0 }
];
const wishlistWithSalePrice = [
  { id: "4027", addedToCart: true, price: 20.0, salePrice: 10.0 },
  { id: "5301", addedToCart: false, price: 20.0, salePrice: 10.0 },
  { id: "6711", addedToCart: true, price: 20.0, salePrice: 10.0 },
  { id: "1244", addedToCart: false, price: 20.0, salePrice: null },
  { id: "4765", addedToCart: true, price: 20.0, salePrice: null }
];
describe('teste getCartTotal ', () => {
  it("pega um array de itens da lista de desejos e retorna o total de todos os itens que foram adicionados ao carrinho", () => {
    const result = getCartTotal(wishlist);
    const expected = 60;

    expect(result).toEqual(expected);
  

});
})
describe('teste getCartTotal wishlistWithSalePrice ', () => {
  it("pega um array de itens da lista de desejos e retorna o total de todos os itens que foram adicionados ao carrinho", () => {
    const result = getCartTotal(wishlistWithSalePrice);
    const expected = 20;

    expect(result).toEqual(expected);
  

});
})

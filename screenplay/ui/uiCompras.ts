
function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')  // espacios y símbolos → "-"
    .replace(/-+/g, '-')         // colapsa "--"
    .replace(/^-|-$/g, '');      // quita guiones extremos
}

export const UiCompras = {
  addToCartButton: "[data-test='add-to-cart']",

  // Página principal (lista de inventario)
  addToCartButtonFor: (productName: string) =>
    `#add-to-cart-${normalize(productName)}`,
  cartIcon: '.shopping_cart_link',
  inventoryList: '.inventory_list',
};







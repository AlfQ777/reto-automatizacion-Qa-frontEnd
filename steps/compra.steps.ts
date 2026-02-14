import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { Compra } from '../screenplay/tasks/compra';
import { ElementText } from '../screenplay/questions/elementText';
import { uiLocators } from '../screenplay/ui/uiDetalleCompra';
setDefaultTimeout(20 * 1000); // 10 segundos

// Usuario selecciona un producto desde la página de productos
When('selecciona el producto {string}', async function (this: CustomWorld, productName) {
  await this.actor!.attemptsTo(Compra.selectProduct(productName));
});

// Validar el precio del producto seleccionado
Then('debería validar el precio del producto {string}', async function (this: CustomWorld, productPrice) {
  const productTitle = await this.actor!.answer(ElementText.of(uiLocators.detailsPrice));
  expect(productTitle.trim()).to.equal(productPrice);
});

//agrega un articulo previamente seleccionado al carrito de compras.
When('hace click en "Add to cart"', async function (this: CustomWorld) {
  await this.actor!.attemptsTo(Compra.addToCartFor());
});

//Usuario añade al carrito uno o varios producto desde la página principal de productos
setDefaultTimeout(20 * 1000); 
When('añade al carrito el producto {string}', async function (this: CustomWorld, productName: string) {
  await this.actor!.attemptsTo(
    Compra.addToCartInMain(productName)
  );
});





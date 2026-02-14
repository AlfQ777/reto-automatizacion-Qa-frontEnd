import { Given, When, Then } from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';

Given('que el usuario abre la página de login', async function () {
  console.log(' Step ejecutado: Usuario logra abrir la pagina.');
});

When('ingresa credenciales válidas', async function () {
  console.log(' Step ejecutado: Usiario ingresa credenciales válidas.');
});

Then('hace click en el botón login', async function () {
  console.log(' Step ejecutado: Usiario realiza click en login.');
});

Then('debería ver el título de la página de productos', async function () {
  console.log(' Step ejecutado: Usuario valida login exitoso.');
});
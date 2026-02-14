import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { Login } from '../screenplay/tasks/login';
import { LoginResult } from '../screenplay/questions/loginResult';
import { LoginBloqued } from '../screenplay/questions/loginBloqued';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(20 * 1000); // 10 segundos

Given('que el usuario abre la página de login', async function (this: CustomWorld) {
  await this.actor!.attemptsTo(Login.openPage());
});

When('ingresa credenciales {string} y {string} válidas', async function (this: CustomWorld, user: string, contraseña: string) {
  await this.actor!.attemptsTo(Login.enterCredentials(user, contraseña));
});

Then('hace click en el botón login', async function (this: CustomWorld) {
  await this.actor!.attemptsTo(Login.clickLogin());
});

Then('debería ver el título de la página de productos', async function (this: CustomWorld) {
  const title = await this.actor!.answer(LoginResult.title());
  expect(title.trim()).to.equal('Swag Labs');
});

Then('debería validar estado bloqueado', async function (this: CustomWorld) {
  const title = await this.actor!.answer(LoginBloqued.title()
  );
  expect(title.trim()).to.equal('Epic sadface: Sorry, this user has been locked out.');
});

Then('debería validar loguin invalido', async function (this: CustomWorld) {
  const title = await this.actor!.answer(LoginBloqued.title()
  );
  expect(title.trim()).to.equal('Epic sadface: Username and password do not match any user in this service');
});

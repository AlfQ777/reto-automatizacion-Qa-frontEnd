import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { setDefaultTimeout } from '@cucumber/cucumber'; // timeout de espera

setDefaultTimeout(7 * 1000); // 7s

//Se coloca la creación y limpieza del Actor en hooks para centralizarlo
Before(async function (this: CustomWorld) {
  console.log('Inicializando actor...');
  await this.initActor('Joel'); // aquí se centraliza la creación del Actor
});

After(async function (this: CustomWorld) {
  console.log('Cerrando navegador...');
  await this.cleanup(); // aquí se cierra todo lo asociado al Actor
});
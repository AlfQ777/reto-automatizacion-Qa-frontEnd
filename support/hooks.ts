import { Before, After } from '@cucumber/cucumber';

//Se coloca la creación y limpieza del Actor en hooks para centralizarlo
Before(async function () {
  console.log('Inicializando actor...');
});

After(async function () {
  console.log('Cerrando navegador...');
});
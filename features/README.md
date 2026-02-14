Reto Técnico QA Frontend — Screenplay + Cucumber + TypeScript + Playwright

Automatización BDD del flujo de compra en SauceDemo usando CucumberJS, TypeScript, Playwright y el patrón Screenplay.

🧱 Stack & Patrón

    Runner: CucumberJS (Gherkin)
    Lenguaje: TypeScript
    Navegación: Playwright
    Patrón de diseño: Screenplay (Actor • Abilities • Interactions • Tasks • Questions • UI)

✅ Alcance (E2E cubierto)

    Login exitoso y usuario bloqueado (validación de mensaje).
    Add to cart:
        .Desde detalle del producto (botón único #add-to-cart).
        .Desde listado (inventario) sin cambiar de página (múltiples productos), usando selectores    dinámicos #add-to-cart-<producto-normalizado>.


    Compra simple: 
        abrir carrito → checkout → completar datos → finalizar → validar “THANK YOU FOR YOUR ORDER!”.


🚀 Requisitos

    Node.js 18+
    npm 9+

📦 Instalación

    npm init -y 
    npm install --save-dev @playwright/test 
    npx playwright install 
    npx playwright test –init 

▶️ Ejecución

    Todos los escenarios:
        npm run test:bdd

    Por tag:
        npm run test:bdd -- --tags "@login_exitoso"
        npm run test:bdd -- --tags "@login_bloqueado"
        npm run test:bdd -- --tags "@AddToCart"
        npm run test:bdd -- --tags "@compra_simple"

🗂️ Estructura del proyecto

tests/
├─ features/
│  ├─ login.feature
│  └─ compra.feature
├─ steps/
│  ├─ login.steps.ts
│  └─ compra.steps.ts
├─ support/
│  ├─ hooks.ts            # Before/After: setDefaultTimeout, actor/world
│  └─ world.ts            # CustomWorld: actor, memory, baseUrl
├─ screenplay/
│  ├─ ui/
│  │  ├─ uiCompras.ts     # selectores carrito & lista
│  │  └─ uiCheckout.ts    # selectores checkout
│  ├─ tasks/
│  │  └─ compra.ts        # addToCartInMain(productName)
│  ├─ interactions/
│  │  ├─ clickButton.ts   # execute(): click con espera visible
│  │  └─ typeText.ts      # execute(): fill con espera visible
│  ├─ questions/
│  │  ├─ elementText.ts   # obtener texto visible
│  └─ actors/actor.ts     # (base) actor + ability browseTheWeb



🧪 Escenarios clave
1) Login exitoso

    Feature: login.feature
    Steps: abrir login → ingresar credenciales → click login → validar título “Swag Labs”.

2) Usuario bloqueado

    Valida el banner de error:
    Epic sadface: Sorry, this user has been locked out.

3) Add to cart (dos modos)

    Detalle: seleccionar un producto → botón único #add-to-cart.
    Inventario (múltiples): sin entrar al detalle, usando ID dinámico:

4) Compra simple e2e

    Añade uno (o varios) ítems desde inventario → abre carrito → checkout → llena datos → finaliza → valida:

        THANK YOU FOR YOUR ORDER!

🏃‍♂️ Ejemplos de ejecución por tag

    npm run test:bdd -- --tags "@login_exitoso"
    npm run test:bdd -- --tags "@login_bloqueado"
    npm run test:bdd -- --tags "@AddToCart"
    npm run test:bdd -- --tags "@compra_simple"

🏷️ Convenciones de commits usadas

    feature/joel: ... para nuevas features
    feat(...), refactor(...), fix(...), chore(...) como alternativa semántica

